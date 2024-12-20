import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'), // Ensure that the secret key is configured properly
    });
  }

  async validate(payload: any) {
    console.log('Decoded JWT payload:', payload); // Log the payload to check if it contains the user ID
    return { id: payload.id, email: payload.email, fullname: payload.fullname }; // Ensure the ID is in the payload
  }
}

