import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../../domain/entities/Compliment";

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {

}

export { ComplimentsRepositories }