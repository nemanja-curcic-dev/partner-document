/* eslint-disable no-process-env */



export class Envs {
    public static NODE_ENV: string | undefined = process.env.NODE_ENV;
    public static LOG_LEVEL: string = (process.env.LOG_LEVEL || 'debug').toLowerCase();
    public static HTTP_PORT: number = parseInt(process.env.HTTP_PORT || '3000');
    
    public static GRPC_PORT: number = parseInt(process.env.GRPC_PORT || '50051');
    
    public static DATABASE_URL: string = process.env.DATABASE_URL || 'mysql://partner-document:partner-document@mysql:3306/partner-document';
    
    
    
    
    
    
}
