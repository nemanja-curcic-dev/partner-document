import {MigrationInterface, QueryRunner} from 'typeorm';

export class PartnerDocument1576521042558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE `partner-documents` (' +
                                '`id` int(10) unsigned NOT NULL AUTO_INCREMENT,' +
                                '`source_account_id` double NOT NULL,' + 
                                '`target_account_id` double NOT NULL,' +
                                '`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                                '`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                                '`deleted_at` timestamp NULL DEFAULT NULL,' +
                                'PRIMARY KEY (`id`),' +
                                'UNIQUE KEY `IDX_ea8320700a856cc2c9ef62d0a8` (`source_account_id`,`target_account_id`)' +
                                ') ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8');

        await queryRunner.query('CREATE TABLE `documents` (' +
                                '`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                                '`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                                '`deleted_at` timestamp NULL DEFAULT NULL,' +
                                '`partner_document_id` int(10) unsigned DEFAULT NULL,' +
                                '`id` int(10) unsigned NOT NULL AUTO_INCREMENT,' +
                                '`document_id` varchar(255) NOT NULL,' +
                                'PRIMARY KEY (`id`),' +
                                'KEY `IDX_bec3c89789f76e330bbe1766b2` (`document_id`),' +
                                'KEY `FK_5fbc3296572202551f4486a341e` (`partner_document_id`),' +
                                'CONSTRAINT `FK_5fbc3296572202551f4486a341e` FOREIGN KEY (`partner_document_id`) REFERENCES `partner-documents` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION' +
                                ') ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `partner-documents`');
        await queryRunner.query('DROP TABLE `documents`');
    }

}
