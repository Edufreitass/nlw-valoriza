import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../../domain/entities/Tag";

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {

}

export { TagsRepositories }