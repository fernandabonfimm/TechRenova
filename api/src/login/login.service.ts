import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './schema/login.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto, UpdateUserDto } from './dtos';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async createNewUser(userInfo: User): Promise<User> {
    const user = await this.userModel.create(userInfo);
    return user;
  }

  async login(loginDto: LoginDto): Promise<User | any> {
    try {
      if (!loginDto.email || !loginDto.password) {
        throw new HttpException(
          'É necessário email e senha',
          HttpStatus.BAD_REQUEST,
        );
      }

      const user = await this.userModel.findOne({
        email: loginDto.email,
        password: loginDto.password,
      });
      if (!user)
        throw new HttpException('Usúario não encontrado', HttpStatus.NOT_FOUND);

      return {
        id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        category: user.category,
      };
    } catch (e: any | HttpException) {
      console.error('Erro no login:', e);
      return {
        code: e.status,
        message: e.message,
      };
    }
  }

  async updateUser(userInfo: UpdateUserDto): Promise<User> {
    try {
      const $set = { ...userInfo };
      const user = await this.userModel.findOneAndUpdate(
        { _id: userInfo.id },
        $set,
        { new: true },
      );
      if (user) return user;
      else throw new Error('User Not Found');
    } catch (e) {
      console.error('Error in updateUser:', e);
      return e;
    }
  }
}
