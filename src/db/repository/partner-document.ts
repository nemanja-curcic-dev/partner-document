import {getManager, Repository} from 'typeorm';
import {PartnerDocument, Document} from '../model/partner-document';
import {checkIfInArray} from '../../helpers/helpers';

interface PartnerDocumentRepositoryInterface {
    add(sourceAccountId: number, targetAccountId: number, documentId: string): Promise<PartnerDocument | undefined>;
    remove(sourceAccountId: number, targetAccountId: number, documentId: string): Promise<PartnerDocument | undefined>;
    get(sourceAccountId: number, targetAccountId: number): Promise<PartnerDocument | undefined>;
}

export class PartnerDocumentRepository implements PartnerDocumentRepositoryInterface {
    partnerRepo: Repository<PartnerDocument>;
    docRepo: Repository<Document>;

    constructor(partnerRepo?: Repository<PartnerDocument> | null, docRepo?: Repository<Document>) {
        this.partnerRepo = partnerRepo || getManager().getRepository(PartnerDocument);
        this.docRepo = docRepo || getManager().getRepository(Document);
    }

    getNonDeleted = async(id: number): Promise<PartnerDocument | undefined> => {
        return await this.partnerRepo
            .createQueryBuilder('partner-documents')
            .innerJoinAndSelect('partner-documents.documents', 'documents')
            .where('documents.partner_document_id = :id AND documents.deleted_at IS NULL', {id: id})
            .getOne();
    };

    get = async(sourceAccountId: number, targetAccountId: number): Promise<PartnerDocument | undefined> => {
        const partnerDoc = await this.partnerRepo.findOne({sourceAccountId: sourceAccountId, targetAccountId: targetAccountId});

        if(!partnerDoc) {
            return partnerDoc;
        }

        const partnerDocWithDocs = await this.getNonDeleted(partnerDoc.id);

        return partnerDocWithDocs;
    };

    add = async(sourceAccountId: number, targetAccountId: number, documentId: string): Promise<PartnerDocument> => {
        // get partner document id
        const partnerDoc = await this.partnerRepo.findOne({sourceAccountId: sourceAccountId, targetAccountId: targetAccountId});
        let partnerDocWithDocs = null;

        // if partner doc doesnt exist create new one
        if(!partnerDoc) {
            const newDoc = new Document();
            newDoc.documentId = documentId;
            await this.docRepo.save(newDoc);

            partnerDocWithDocs = new PartnerDocument();
            partnerDocWithDocs.sourceAccountId = sourceAccountId;
            partnerDocWithDocs.targetAccountId = targetAccountId;
            partnerDocWithDocs.documents = [newDoc];
            return await this.partnerRepo.save(partnerDocWithDocs);
        }

        // if it does exist get it with non deleted document ids
        partnerDocWithDocs = await this.getNonDeleted(partnerDoc.id) as PartnerDocument;

        // add document if it is not already added
        if(checkIfInArray(partnerDocWithDocs.documents, documentId)) {
            // create new document
            const newDoc = new Document();
            newDoc.documentId = documentId;
            await this.docRepo.save(newDoc);

            partnerDocWithDocs.documents.push(newDoc);
            await this.partnerRepo.save(partnerDocWithDocs);
        }

        return partnerDocWithDocs;
    };

    remove = async(sourceAccountId: number, targetAccountId: number, documentId: string): Promise<PartnerDocument | undefined> => {
        const partnerDoc = await this.partnerRepo.findOne({sourceAccountId: sourceAccountId, targetAccountId: targetAccountId});

        if(!partnerDoc) {
            return partnerDoc;
        }

        const deletedDoc = await this.docRepo.findOne({documentId: documentId});

        if(deletedDoc) {
            deletedDoc.deletedAt = new Date();
            await this.docRepo.save(deletedDoc);
        }

        const partnerDocWithDocs = await this.getNonDeleted(partnerDoc.id);

        return partnerDocWithDocs;
    };
}