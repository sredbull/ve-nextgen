import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdersService } from '../services/orders.service';
import { OrdersResolver } from '../resolvers/orders.resolver';
import { Order } from '../entities/order.entity';
import { ThingsModule } from '../modules/things.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), ThingsModule],
  providers: [OrdersService, OrdersResolver],
})
export class OrdersModule {}
