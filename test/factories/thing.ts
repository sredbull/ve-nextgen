import { Factory } from 'fishery';
import * as faker from 'faker';

import { CreateThingDto } from 'src/server/app/dtos/create-thing.dto';

export default Factory.define<CreateThingDto>(() => ({
  name: faker.lorem.words(),
}));
