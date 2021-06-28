import { EntityRepository, Repository } from "typeorm";
import { User } from "../../domain/entities/User"

@EntityRepository(User)
class UsersRepositories extends Repository<User> {

}

export { UsersRepositories }