import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Car } from './interfaces/car.interface';

import { createCarDto } from './dtos/create-car.dto';
import { updateCarDto } from './dtos/update-car.dto';

import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  public findAll() {
    return this.cars;
  }

  public findById(id: string) {
    let cars = this.cars.find((c) => c.id === id);

    if (!cars) throw new NotFoundException(`Car with id '${id}' not found`);

    return cars;
  }

  public create(createCarDto: createCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);
    return car;
  }

  public update(id: string, updateCarDto: updateCarDto) {
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`Car with id is not valid inside the body`);
    }
    let carDB = this.findById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  public delete(id: string) {
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  public fillCarsDataWithSeed(cars: Car[]) {
    this.cars = cars;

    return this.cars;
  }
}
