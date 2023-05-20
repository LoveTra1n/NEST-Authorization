import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./entities/user.entity";
import {Roles} from "../roles/entities/roles.entity";
import {UserRoles} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
      SequelizeModule.forFeature([User,Roles, UserRoles]),
      RolesModule
  ]
})
export class UsersModule{

}
