import '@babel/polyfill';

import logger from '@coozzy/logger';
import {Envs} from './misc/envs'; 
import {init as initMetrics, shutdown as shutdownMetrics} from '@coozzy/prometheus';

import connect from './db/index';

import {GrpcApp} from './grpc-app';


initMetrics({
    enableServer: true,
    http: false,
    grpc: true,
    amqp: false
});

let grpcApp: GrpcApp;
connect(() => {
    grpcApp = new GrpcApp(Envs.GRPC_PORT);
});

// Shutdown handling
const shutdown = (): void => {
    logger.info('SIGTERM/SIGINT received');

    shutdownMetrics();
    

    
    // Shutting down gRPC server
    grpcApp.shutdown();
};
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
