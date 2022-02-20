import { Module } from '@nestjs/common';
import { ViewController } from './view.controller';
import { ViewService } from './view.service';
import { PageModule } from '../models/page/page.module';

@Module({
  imports: [PageModule],
  providers: [ViewService],
  controllers: [ViewController],
})
export class ViewModule {}
