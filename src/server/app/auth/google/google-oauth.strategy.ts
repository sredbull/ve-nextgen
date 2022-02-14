import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { _UserRepository } from '../../repositories/user.repository';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    configService: ConfigService,
    private readonly userRepository: _UserRepository,
  ) {
    super({
      clientID: configService.get<string>('OAUTH_GOOGLE_ID'),
      clientSecret: configService.get<string>('OAUTH_GOOGLE_SECRET'),
      callbackURL: configService.get<string>('OAUTH_GOOGLE_REDIRECT_URL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    const { id, name, emails } = profile;

    let user = await this.userRepository.findOne({
      where: { provider: 'google', providerId: id },
    });
    if (!user) {
      user = await this.userRepository.create({
        provider: 'google',
        providerId: id,
        name: name.givenName,
        username: emails[0].value,
      });
    }

    return user;
  }
}
