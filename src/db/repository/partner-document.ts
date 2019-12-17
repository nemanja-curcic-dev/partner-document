import {getManager, Repository} from 'typeorm';
import {PartnerDocument, Document} from '../model/partner-document';
import {checkIfInArray} from '../../helpers/helpers';

interface PartnerDocumentRepositoryInterface {
    add(sourceAccountId: number, targetAccountId: number, documentId: string): Promise<PartnerDocument>;
    remove(sourceAccountId: number, targetAccountId: number, documentId: string): Promise<PartnerDocument | undefined>;
    get(sourceAccountId: number, targetAccountId: number): Promise<PartnerDocument | undefined>;
}

export class PartnerDocumentRepository implements PartnerDocumentRepositoryInterface {
    partnerRepo: Repository<PartnerDocument>
    docRepo: Repository<Document>

    constructor(partnerRepo?: Repository<PartnerDocument> | null, docRepo?: Repository<Document>) {
        this.partnerRepo = partnerRepo || getManager().getRepository(PartnerDocument);
        this.docRepo = docRepo || getManager().getRepository(Document);
    }

    get = async(sourceAccountId: number, targetAccountId: number): Promise<PartnerDocument | undefined> => {
        return await this.partnerRepo.findOne({sourceAccountId: sourceAccountId, targetAccountId: targetAccountId}, {relations: ['documents']});
    }

    add = async(sourceAccountId: number, targetAccountId: number, documentId: string): Promise<PartnerDocument> => {
        const partnerDoc = await this.partnerRepo.findOne({sourceAccountId: sourceAccountId, targetAccountId: targetAccountId}, {relations: ['documents']});
        
        if(!partnerDoc) {
            // create new document
            const newDoc = new Document();
            newDoc.documentId = documentId;
            await this.docRepo.save(newDoc);

            // create new partner document
            const newPartnerDoc = new PartnerDocument();
            newPartnerDoc.sourceAccountId = sourceAccountId;
            newPartnerDoc.targetAccountId = targetAccountId;
            newPartnerDoc.documents = [newDoc];
            return await this.partnerRepo.save(newPartnerDoc);
        }
        
        // create new document
        const newDoc = new Document();
        newDoc.documentId = documentId;
        await this.docRepo.save(newDoc);

        // add document if it is not already added
        if(checkIfInArray(partnerDoc.documents, newDoc)) {
            partnerDoc.documents.push(newDoc);
        }
        return await this.partnerRepo.save(partnerDoc);
    }

    remove = async(sourceAccountId: number, targetAccountId: number, documentId: string): Promise<PartnerDocument | undefined> => {
        const partnerDoc = await this.partnerRepo.findOne({sourceAccountId: sourceAccountId, targetAccountId: targetAccountId}, {relations: ['documents']});

        if(!partnerDoc) {
            return partnerDoc;
        }

        partnerDoc.documents = partnerDoc.documents.filter(doc => {
            return doc.documentId !== documentId;
        });

        return await this.partnerRepo.save(partnerDoc);
    }
}