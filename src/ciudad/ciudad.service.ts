import { Injectable } from '@nestjs/common';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { Repository, FindOneOptions } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';

@Injectable()
export class CiudadService {
  create(createCiudadDto: CreateCiudadDto) {
    return 'This action adds a new ciudad';
  }

  findAll() {
    return `This action returns all ciudad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudad`;
  }

  update(id: number, updateCiudadDto: UpdateCiudadDto) {
    return `This action updates a #${id} ciudad`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudad`;
  }
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('ciudad')
export class Ciudad {

    @PrimaryGeneratedColumn()
    private idCiudad: number;

    @Column()
    private nombre: string;

    constructor(id: number, nombre: string) {
        this.idCiudad = id;
        this.nombre = nombre;
    }
public getIdCiudad(): number { return this.idCiudad; }
    public setIdCiudad(idCiudad: number): void { this.idCiudad = idCiudad; }
    public getNombre(): string { return this.nombre; }
    public setNombre(nombre: string): void { this.nombre = nombre; }

}
