import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsoleModule } from 'nestjs-console';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SeedService } from 'src/server/console/seed.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './models/user/user.module';
import { PageModule } from './models/page/page.module';
import { HeadModule } from './models/page/head/head.module';
import { MetaModule } from './models/page/head/meta/meta.module';
import { BodyModule } from './models/page/body/body.module';
import { HeaderModule } from './models/page/body/header/header.module';
import { FooterModule } from './models/page/body/footer/footer.module';
import { MainModule } from './models/page/body/main/main.module';
import { ArticleModule } from './models/page/body/main/article/article.module';
import { NavigationModule } from './models/page/body/navigation/navigation.module';
import { SidebarModule } from './models/page/body/sidebar/sidebar.module';
import { AModule } from './models/common/a.module';

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
    ArticleModule,
    NavigationModule,
    SidebarModule,
    AModule,
  ],
  providers: [SeedService, AppService],
  controllers: [AppController],
})
export class AppModule {}
