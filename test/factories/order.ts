import { Factory } from 'fishery';
import * as faker from 'faker';

import { CreateOrderDto } from 'src/server/app/dtos/create-order.dto';

export default Factory.define<CreateOrderDto>(({ associations }) => ({
  alias: faker.internet.userName(),
  user: associations.user,
  thing: associations.thing,
}));
