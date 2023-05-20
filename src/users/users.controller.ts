import { Controller, Get, Post, Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./entities/user.entity";
@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @ApiOperation({summary:'создание пользователя'})
  @ApiResponse({status:200, type:User})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @ApiOperation({summary:'получить всех пользователей'})
  @ApiResponse({status:200, type:[User]})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
