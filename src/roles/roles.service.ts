import { Injectable } from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Roles} from "./entities/roles.entity";
import {User} from "../users/entities/user.entity";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Roles) private RolesRepository: typeof Roles) {}

    async createRole(dto:CreateRoleDto){
        const role = await this.RolesRepository.create(dto);
        return role
    }


    async getRoleByValue(value:string){
        const role = await this.RolesRepository.findOne({where: {value}})
        return role
    }
}
