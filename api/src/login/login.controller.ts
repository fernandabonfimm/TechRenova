import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from './schema/login.schema';
import { LoginDto, UpdateUserDto } from './dtos';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() loginInfo: LoginDto): Promise<User> {
    return this.loginService.login(loginInfo);
  }
  @Get('/all')
  async getAllUser(): Promise<User[]> {
    return this.loginService.findAllUsers();
  }

  @Post('/save')
  async saveUser(@Body() newUser: User): Promise<User> {
    return this.loginService.createNewUser(newUser);
  }

  @Put('/update')
  async updateUser(@Body() updateUser: UpdateUserDto): Promise<User> {
    return this.loginService.updateUser(updateUser);
  }
}
