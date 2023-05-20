import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "./entities/user.entity";
import {InjectModel} from "@nestjs/sequelize";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private UserRepository: typeof User,
              private RoleService:RolesService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.UserRepository.create(createUserDto)
    const role = await this.RoleService.getRoleByValue('USER')
    await user.$set('roles',[role.id])
    return user
  }

  async findAll() {
    const users = await this.UserRepository.findAll({include:{all:true}})
    return users;
  }

}
