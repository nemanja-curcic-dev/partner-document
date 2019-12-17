import logger from '@coozzy/logger';
import {GrpcServer} from '@coozzy/grpc';
import {grpcErrorHandler, AppError, ErrorCode} from '@coozzy/error';
import {ServerUnaryCall} from 'grpc';
import {PartnerDocumentRepository} from './db/repository/partner-document';
import {GetRequest,
    GetResponse,
    AddRequest,
    AddResponse,
    RemoveRequest,
    RemoveResponse} from './proto/generated/user/partner-document/partner-document_pb';

import {PartnerDocumentServiceService} from './proto/generated/user/partner-document/partner-document_grpc_pb';
import {fromPartnerDocument} from './helpers/helpers';

export class GrpcApp extends GrpcServer {

    repo: PartnerDocumentRepository

    constructor(port: number, repo?: PartnerDocumentRepository) {
        super(port);
        this.repo = repo || new PartnerDocumentRepository;

        // Add gRPC service
        this.server.addService(PartnerDocumentServiceService, {
            get: this.get,
            add: this.add,
            remove: this.remove
        });

        this.start();
    }
    
    get = async(call: ServerUnaryCall<GetRequest>,
        callback: (error: {code: number; message: string} | null, response: GetResponse) => void): Promise<void> => {
        logger.debug(`Received Get RPC call: ${JSON.stringify(call.request.toObject())}`);
        call.metadata.add('method', 'Get');

        try{
            const result = await this.repo.get(call.request.getSourceaccountid(),
                call.request.getTargetaccountid());

            if(!result) {
                throw new AppError(ErrorCode.NOT_FOUND, 'Documents dont exist.');
            }
                
            const response = new GetResponse();
            response.setPartnerdocuments(fromPartnerDocument(result));

            return callback(null, response);
        } catch (e) {
            return grpcErrorHandler(callback, 'Could not get documents.')(e);
        }
    }

    add = async(call: ServerUnaryCall<AddRequest>,
        callback: (error: {code: number; message: string} | null, response: AddResponse) => void): Promise<void> => {
        logger.debug(`Received Add RPC call: ${JSON.stringify(call.request.toObject())}`);
        call.metadata.add('method', 'Add');

        try{
            if(call.request.getDocumentid() === '') {
                throw new AppError(ErrorCode.INVALID_ARGUMENT, 'You have to provide document id.');
            }

            const result = await this.repo.add(call.request.getSourceaccountid(), call.request.getTargetaccountid(), call.request.getDocumentid());
            
            const response = new AddResponse();
            response.setPartnerdocuments(fromPartnerDocument(result));

            return callback(null, response);
        } catch(e) {
            return grpcErrorHandler(callback, 'Could not add partner document.')(e);
        }
    }

    remove = async(call: ServerUnaryCall<RemoveRequest>,
        callback: (error: {code: number; message: string} | null, response: RemoveResponse) => void): Promise<void> => {
        logger.debug(`Received Remove RPC call: ${JSON.stringify(call.request.toObject())}`);
        call.metadata.add('method', 'Remove');
            
        try{
            const result = await this.repo.remove(call.request.getSourceaccountid(), call.request.getTargetaccountid(), call.request.getDocumentid());

            if(!result) {
                throw new AppError(ErrorCode.NOT_FOUND, 'Document that you tried to remove does not exist.');
            }

            const response = new RemoveResponse();
            response.setPartnerdocuments(fromPartnerDocument(result));

            return callback(null, response);
        } catch(e) {
            return grpcErrorHandler(callback, 'Could not remove document.')(e);
        }
    }
}
