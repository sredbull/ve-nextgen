import { Module } from '@nestjs/common';
import { UserModule } from '../../models/user/user.module';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { CognitoOauthController } from './cognito-oauth.controller';
import { CognitoOauthStrategy } from './cognito-oauth.strategy';

@Module({
  imports: [UserModule, JwtAuthModule],
  controllers: [CognitoOauthController],
  providers: [CognitoOauthStrategy],
})
export class CognitoOauthModule {}
