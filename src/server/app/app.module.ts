import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsoleModule } from 'nestjs-console';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SeedService } from 'src/server/console/seed.service';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './modules/user.module';
import { PageModule } from './modules/page.module';
import { HeadModule } from './modules/page/head.module';
import { MetaModule } from './modules/page/head/meta.module';
import { BodyModule } from './modules/page/body.module';
import { HeaderModule } from './modules/page/body/header.module';
import { FooterModule } from './modules/page/body/footer.module';
import { MainModule } from './modules/page/body/main.module';
import { NavigationModule } from './modules/page/body/navigation.module';
import { SidebarModule } from './modules/page/body/sidebar.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
        logging: false,
        ssl:
          configService.get<string>('NODE_ENV') === 'production'
            ? { rejectUnauthorized: false }
            : false,
      }),
      inject: [ConfigService],
    }),
    ConsoleModule,
    AuthModule,
    UserModule,
    PageModule,
    HeadModule,
    MetaModule,
    BodyModule,
    HeaderModule,
    FooterModule,
    MainModule,
    NavigationModule,
    SidebarModule,
  ],
  providers: [SeedService, AppService],
  controllers: [AppController],
})
export class AppModule {}
