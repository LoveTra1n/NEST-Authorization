import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/entities/user.entity";
import { RolesService } from './roles/roles.service';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import {Roles} from "./roles/entities/roles.entity";
import {UserRoles} from "./roles/user-roles.model";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath:`.${process.env.NODE_ENV}.env`
      }),
      SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User,Roles,UserRoles],
      autoLoadModels:true
    }),
      UsersModule,
      RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
