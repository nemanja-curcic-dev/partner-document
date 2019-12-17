import {PartnerDocument as PartnerDocumentModel, Document} from '../db/model/partner-document';
import {PartnerDocuments} from '../proto/generated/user/partner-document/partner-document_pb';

export function fromPartnerDocument(partnerDoc: PartnerDocumentModel): PartnerDocuments {
    const partnerDocs = new PartnerDocuments();

    partnerDocs.setSourceaccountid(partnerDoc.sourceAccountId);
    partnerDocs.setTargetaccountid(partnerDoc.targetAccountId);

    const documentIds = partnerDoc.documents.map(doc => {
        return doc.documentId;
    });

    partnerDocs.setDocumentidsList(documentIds);

    return partnerDocs;
}

export function checkIfInArray(documents: Document[], docId: string): boolean {
    for(const d of documents) {
        if (d.documentId === docId) {
            return false;
        }
    }
    
    return true;
}