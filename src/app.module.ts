import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadModule } from './ciudad/ciudad.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '*************', // reemplazalo por tu contraseña real
      database: 'escolar',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    // Otros módulos (ej: CiudadModule) van acá
  ],
})
export class AppModule {}


