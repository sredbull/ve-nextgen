import { Module } from '@nestjs/common';
import { ViewController } from '../controllers/view.controller';
import { ViewService } from '../services/view.service';
import { PageModule } from '../modules/page.module';

@Module({
  imports: [PageModule],
  providers: [ViewService],
  controllers: [ViewController],
})
export class ViewModule {}
