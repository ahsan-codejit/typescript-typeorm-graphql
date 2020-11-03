import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import User from '../../repositories/models/user';
import CreateUser from '../entities/createUser';
import UpdateUser from '../entities/updateUser';

@Resolver()
export class UserResolver {
    @Query(() => [User])
    users() {
        return User.find();
    }

    @Mutation(() => User)
    async createUser(@Arg("data") data: CreateUser) {
        const user: any = User.create(data);
        await user.save();
        return user;
    }

    @Query(() => User)
    user(@Arg("id") id: string) {
        return User.findOne({ where: { id } });
    }

    @Mutation(() => User)
    async updateUser(@Arg("id") id: string, @Arg("data") data: UpdateUser) {
        const user = await User.findOne({ where: { id } });

        if (!user) {
            throw new Error(`user does not exist!`);
        }
        Object.assign(user, data);
        await user.save();
        return user;
    }

    @Mutation(() => Boolean)
    async deleteUser(@Arg("id") id: string) {
        const user = await User.findOne({ where: { id } });
        if (!user) {
            throw new Error(`user does not exist!`);
        }
        await user.remove();
        return true;
    }
}