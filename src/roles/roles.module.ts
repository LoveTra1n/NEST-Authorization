import { Module } from '@nestjs/common';
import {RolesService} from "./roles.service";
import {RolesController} from "./roles.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {Roles} from "./entities/roles.entity";
import {User} from "../users/entities/user.entity";
import {UserRoles} from "./user-roles.model";

@Module({
    controllers: [RolesController],
    providers: [RolesService],
    imports: [
        SequelizeModule.forFeature([Roles, User, UserRoles])
    ],
    exports: [
        RolesService
    ]
})
export class RolesModule {}
