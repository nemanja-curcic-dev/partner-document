// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_partner$document_partner$document_pb = require('../../user/partner-document/partner-document_pb.js');

function serialize_coozzy_user_partner_document_partner_document_AddRequest(arg) {
  if (!(arg instanceof user_partner$document_partner$document_pb.AddRequest)) {
    throw new Error('Expected argument of type coozzy.user.partner_document.partner_document.AddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_user_partner_document_partner_document_AddRequest(buffer_arg) {
  return user_partner$document_partner$document_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_user_partner_document_partner_document_AddResponse(arg) {
  if (!(arg instanceof user_partner$document_partner$document_pb.AddResponse)) {
    throw new Error('Expected argument of type coozzy.user.partner_document.partner_document.AddResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_user_partner_document_partner_document_AddResponse(buffer_arg) {
  return user_partner$document_partner$document_pb.AddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_user_partner_document_partner_document_GetRequest(arg) {
  if (!(arg instanceof user_partner$document_partner$document_pb.GetRequest)) {
    throw new Error('Expected argument of type coozzy.user.partner_document.partner_document.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_user_partner_document_partner_document_GetRequest(buffer_arg) {
  return user_partner$document_partner$document_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_user_partner_document_partner_document_GetResponse(arg) {
  if (!(arg instanceof user_partner$document_partner$document_pb.GetResponse)) {
    throw new Error('Expected argument of type coozzy.user.partner_document.partner_document.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_user_partner_document_partner_document_GetResponse(buffer_arg) {
  return user_partner$document_partner$document_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_user_partner_document_partner_document_RemoveRequest(arg) {
  if (!(arg instanceof user_partner$document_partner$document_pb.RemoveRequest)) {
    throw new Error('Expected argument of type coozzy.user.partner_document.partner_document.RemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_user_partner_document_partner_document_RemoveRequest(buffer_arg) {
  return user_partner$document_partner$document_pb.RemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coozzy_user_partner_document_partner_document_RemoveResponse(arg) {
  if (!(arg instanceof user_partner$document_partner$document_pb.RemoveResponse)) {
    throw new Error('Expected argument of type coozzy.user.partner_document.partner_document.RemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coozzy_user_partner_document_partner_document_RemoveResponse(buffer_arg) {
  return user_partner$document_partner$document_pb.RemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ------------------------------------
//  SERVICES
// ------------------------------------ 
//
var PartnerDocumentServiceService = exports.PartnerDocumentServiceService = {
  add: {
    path: '/coozzy.user.partner_document.partner_document.PartnerDocumentService/Add',
    requestStream: false,
    responseStream: false,
    requestType: user_partner$document_partner$document_pb.AddRequest,
    responseType: user_partner$document_partner$document_pb.AddResponse,
    requestSerialize: serialize_coozzy_user_partner_document_partner_document_AddRequest,
    requestDeserialize: deserialize_coozzy_user_partner_document_partner_document_AddRequest,
    responseSerialize: serialize_coozzy_user_partner_document_partner_document_AddResponse,
    responseDeserialize: deserialize_coozzy_user_partner_document_partner_document_AddResponse,
  },
  remove: {
    path: '/coozzy.user.partner_document.partner_document.PartnerDocumentService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: user_partner$document_partner$document_pb.RemoveRequest,
    responseType: user_partner$document_partner$document_pb.RemoveResponse,
    requestSerialize: serialize_coozzy_user_partner_document_partner_document_RemoveRequest,
    requestDeserialize: deserialize_coozzy_user_partner_document_partner_document_RemoveRequest,
    responseSerialize: serialize_coozzy_user_partner_document_partner_document_RemoveResponse,
    responseDeserialize: deserialize_coozzy_user_partner_document_partner_document_RemoveResponse,
  },
  get: {
    path: '/coozzy.user.partner_document.partner_document.PartnerDocumentService/Get',
    requestStream: false,
    responseStream: false,
    requestType: user_partner$document_partner$document_pb.GetRequest,
    responseType: user_partner$document_partner$document_pb.GetResponse,
    requestSerialize: serialize_coozzy_user_partner_document_partner_document_GetRequest,
    requestDeserialize: deserialize_coozzy_user_partner_document_partner_document_GetRequest,
    responseSerialize: serialize_coozzy_user_partner_document_partner_document_GetResponse,
    responseDeserialize: deserialize_coozzy_user_partner_document_partner_document_GetResponse,
  },
};

exports.PartnerDocumentServiceClient = grpc.makeGenericClientConstructor(PartnerDocumentServiceService);
