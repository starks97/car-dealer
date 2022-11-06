import { Injectable } from '@nestjs/common';

import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CAR_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    public readonly carService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  populateDB() {
    this.carService.fillCarsDataWithSeed(CAR_SEED);

    this.brandService.fillBrandsDataWithSeed(BRANDS_SEED);
    return 'seed executed';
  }
}
