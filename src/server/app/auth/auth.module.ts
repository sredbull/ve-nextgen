import { Module } from '@nestjs/common';
import { UserModule } from '../models/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleOauthModule } from './google/google-oauth.module';
import { JwtAuthModule } from './jwt/jwt-auth.module';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [UserModule, PassportModule, GoogleOauthModule, JwtAuthModule],
})
export class AuthModule {}
