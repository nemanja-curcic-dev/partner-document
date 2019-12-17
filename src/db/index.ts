import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
import path from 'path';

import {Envs} from '../misc/envs';
import logger from '@coozzy/logger';

export default (cb: () => void): void => {
    createConnection({
        type: 'mysql',
        url: Envs.DATABASE_URL,
        namingStrategy: new SnakeNamingStrategy(),
        migrationsRun: true,
        migrations: [
            path.join(__dirname + '/migration/*.ts'),
            path.join(__dirname + '/migration/*.js')
        ],
        entities: [
            path.join(__dirname + '/model/*.ts'),
            path.join(__dirname + '/model/*.js')
        ]
    }).then(() => {
        logger.info('Successfully connected to database');
    }).catch(err => {
        logger.error('Failed to connect to database', err);
        process.exit(-1);
    }).then(() => {
        cb();
    });
};
