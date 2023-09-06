import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    try {
      // const user = await this.moongose.user.create({
      //     email: dto.email,
      //     hash,
      // })
      //return this.signToken(user.id, user.email);
    } catch (e) {
      return e;
    }
  }
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };
    const secret = 'MeU SeGrEdO'; //this.config.get('JWT_SECRET);
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '60m',
      secret: secret,
    });

    return { access_token: token };
  }
}
