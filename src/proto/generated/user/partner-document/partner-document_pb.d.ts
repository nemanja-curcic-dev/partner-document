// package: coozzy.user.partner_document.partner_document
// file: user/partner-document/partner-document.proto

import * as jspb from "google-protobuf";

export class PartnerDocuments extends jspb.Message {
  getSourceaccountid(): number;
  setSourceaccountid(value: number): void;

  getTargetaccountid(): number;
  setTargetaccountid(value: number): void;

  clearDocumentidsList(): void;
  getDocumentidsList(): Array<string>;
  setDocumentidsList(value: Array<string>): void;
  addDocumentids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnerDocuments.AsObject;
  static toObject(includeInstance: boolean, msg: PartnerDocuments): PartnerDocuments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartnerDocuments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnerDocuments;
  static deserializeBinaryFromReader(message: PartnerDocuments, reader: jspb.BinaryReader): PartnerDocuments;
}

export namespace PartnerDocuments {
  export type AsObject = {
    sourceaccountid: number,
    targetaccountid: number,
    documentidsList: Array<string>,
  }
}

export class AddRequest extends jspb.Message {
  getSourceaccountid(): number;
  setSourceaccountid(value: number): void;

  getTargetaccountid(): number;
  setTargetaccountid(value: number): void;

  getDocumentid(): string;
  setDocumentid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRequest): AddRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRequest;
  static deserializeBinaryFromReader(message: AddRequest, reader: jspb.BinaryReader): AddRequest;
}

export namespace AddRequest {
  export type AsObject = {
    sourceaccountid: number,
    targetaccountid: number,
    documentid: string,
  }
}

export class AddResponse extends jspb.Message {
  hasPartnerdocuments(): boolean;
  clearPartnerdocuments(): void;
  getPartnerdocuments(): PartnerDocuments | undefined;
  setPartnerdocuments(value?: PartnerDocuments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddResponse): AddResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddResponse;
  static deserializeBinaryFromReader(message: AddResponse, reader: jspb.BinaryReader): AddResponse;
}

export namespace AddResponse {
  export type AsObject = {
    partnerdocuments?: PartnerDocuments.AsObject,
  }
}

export class RemoveRequest extends jspb.Message {
  getSourceaccountid(): number;
  setSourceaccountid(value: number): void;

  getTargetaccountid(): number;
  setTargetaccountid(value: number): void;

  getDocumentid(): string;
  setDocumentid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRequest;
  static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
  export type AsObject = {
    sourceaccountid: number,
    targetaccountid: number,
    documentid: string,
  }
}

export class RemoveResponse extends jspb.Message {
  hasPartnerdocuments(): boolean;
  clearPartnerdocuments(): void;
  getPartnerdocuments(): PartnerDocuments | undefined;
  setPartnerdocuments(value?: PartnerDocuments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResponse;
  static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
  export type AsObject = {
    partnerdocuments?: PartnerDocuments.AsObject,
  }
}

export class GetRequest extends jspb.Message {
  getSourceaccountid(): number;
  setSourceaccountid(value: number): void;

  getTargetaccountid(): number;
  setTargetaccountid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    sourceaccountid: number,
    targetaccountid: number,
  }
}

export class GetResponse extends jspb.Message {
  hasPartnerdocuments(): boolean;
  clearPartnerdocuments(): void;
  getPartnerdocuments(): PartnerDocuments | undefined;
  setPartnerdocuments(value?: PartnerDocuments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    partnerdocuments?: PartnerDocuments.AsObject,
  }
}
