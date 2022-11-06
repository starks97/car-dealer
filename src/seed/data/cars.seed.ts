import { Car } from 'src/cars/interfaces/car.interface';

import { v4 as uuid } from 'uuid';

export const CAR_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'BMW',
    model: 'M3',
  },
  {
    id: uuid(),
    brand: 'Tesla',
    model: 'A-45',
  },
  {
    id: uuid(),
    brand: 'Ferrari',
    model: 'falcon',
  },
  {
    id: uuid(),
    brand: 'Ferrari',
    model: 'falcon',
  },
];
