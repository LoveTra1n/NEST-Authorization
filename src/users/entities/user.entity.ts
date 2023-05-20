import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Roles} from "../../roles/entities/roles.entity";
import {UserRoles} from "../../roles/user-roles.model";

interface UserCreationAttrs{
    email:string,
    password:string
}

@Table({tableName:"users"})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example:'1', description:'уникальная идентификатор'})
    @Column({type:DataType.INTEGER, autoIncrement:true, unique:true, primaryKey:true})
    id:number;

    @ApiProperty({example:'email@gmail.com', description:'почтовый ящик'})
    @Column({type:DataType.STRING, allowNull:true, unique:true})
    email:string;

    @ApiProperty({example:'qwerty1234', description:'пароль'})
    @Column({type:DataType.STRING, allowNull:true})
    password:string;

    @ApiProperty({example:'true', description:'бан'})
    @Column({type:DataType.BOOLEAN, defaultValue:false})
    banned:boolean;

    @ApiProperty({example:'none', description:'none'})
    @Column({type:DataType.STRING, allowNull:true})
    banReason:string;

    @BelongsToMany(()=>Roles, ()=>UserRoles)
    roles:Roles[]

}
