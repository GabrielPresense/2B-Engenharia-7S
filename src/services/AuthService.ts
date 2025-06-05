import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/User';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user && await user.validatePassword(password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    };
  }

  async register(userData: { email: string; password: string; name: string }) {
    const existingUser = await this.usersRepository.findOne({ 
      where: { email: userData.email } 
    });

    if (existingUser) {
      throw new UnauthorizedException('Email já está em uso');
    }

    const user = this.usersRepository.create(userData);
    await this.usersRepository.save(user);
    
    const { password, ...result } = user;
    return result;
  }
} 