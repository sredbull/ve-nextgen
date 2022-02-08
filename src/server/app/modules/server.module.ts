import { Module } from '@nestjs/common';

import { AppModule } from 'src/server/app/modules/app.module';
import { ViewModule } from 'src/server/app/modules/view.module';

@Module({
  imports: [AppModule, ViewModule],
})
export class ServerModule {}
