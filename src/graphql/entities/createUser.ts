import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateUser {
    @Field(() => String)
    firstName: string

    @Field(() => String)
    lastName: string

    @Field(() => String)
    nickName: string

    @Field(() => String)
    email: string

    @Field(() => String)
    password: string
}