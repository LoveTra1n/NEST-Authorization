import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/entities/user.entity";
import {Roles} from "./entities/roles.entity";



@Table({tableName:"user_roles", createdAt:false,updatedAt:false})
export class UserRoles extends Model<UserRoles>{
    @ApiProperty({example:'1', description:'уникальная идентификатор'})
    @Column({type:DataType.INTEGER, autoIncrement:true, unique:true, primaryKey:true})
    id:number;

    @ForeignKey(()=>Roles)
    @Column({type:DataType.INTEGER})
    roleId:string;

    @ForeignKey(()=>User)
    @Column({type:DataType.INTEGER})
    userId:string;


}