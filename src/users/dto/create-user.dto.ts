import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example:'email@gmail.com', description:'Почта'})
    readonly email:string;

    @ApiProperty({example:'1234qwerty', description:'Пароль'})
    readonly password:string

}
