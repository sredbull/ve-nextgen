import { Thing } from '../entities/thing.entity';
import { User } from '../entities/user.entity';

export class CreateOrderDto {
  alias: string;
  user: User;
  thing: Thing;
}

export class CreateOrderFromThingDetailsDto {
  alias: string;
  user: User;
  thingName: string;
}
