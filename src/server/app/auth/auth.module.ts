import { Module } from '@nestjs/common';
import { UserModule } from '../modules/user.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleOauthModule } from './google/google-oauth.module';
import { JwtAuthModule } from './jwt/jwt-auth.module';
import { AuthController } from './auth.controller';
import { CognitoOauthModule } from './cognito/cognito-oauth.module';

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    PassportModule,
    GoogleOauthModule,
    JwtAuthModule,
    CognitoOauthModule,
  ],
})
export class AuthModule {}
