import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    let tags = await tagsRepositories.find();
    tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}` }));

    return tags;
  }
}

export { ListTagsService };
