import {Column, CreateDateColumn, Entity, UpdateDateColumn, Index, OneToMany, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';

@Entity({
    name: 'partner-documents'
})
@Index(['sourceAccountId', 'targetAccountId'], {unique: true})
export class PartnerDocument {
    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id!: number;

    @Column({
        type: 'double'
    })
    sourceAccountId!: number

    @Column({
        type: 'double'
    })
    targetAccountId!: number

    // eslint-disable-next-line
    @OneToMany(type => Document, document => document.partnerDocument, {onDelete: 'CASCADE', nullable: true})
    documents!: Document[]

    @CreateDateColumn({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt!: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt!: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
        default: null
    })
    deletedAt!: Date | null
}

@Entity({
    name: 'documents'
})
@Index(['documentId'])
export class Document {
    @PrimaryGeneratedColumn(
        {
            unsigned: true
        }
    )
    id!: number;

    @Column({
        type: 'varchar',
        length: 255
    })
    documentId!: string
    
    // eslint-disable-next-line
    @ManyToOne(type => PartnerDocument, partnerDocument => partnerDocument.documents)
    partnerDocument!: PartnerDocument

    @CreateDateColumn({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt!: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt!: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
        default: null
    })
    deletedAt!: Date | null
}