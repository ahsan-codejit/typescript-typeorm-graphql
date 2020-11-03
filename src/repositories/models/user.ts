import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export default class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    firstName: string

    @Field(() => String)
    @Column()
    lastName: string

    @Field(() => String)
    @Column()
    nickName: string

    @Field(() => String)
    @Column()
    email: string

    @Field(() => String)
    @Column({
        transformer: new EncryptionTransformer({
            key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
            algorithm: 'aes-256-cbc',
            ivLength: 16,
            iv: 'ff5ac19190424b1d88f9419ef949ae56'
        })
    })
    password: string
}