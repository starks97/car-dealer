import { IsString, MinLength } from "class-validator";

export class createCarDto {
  @IsString({ message: 'Brand must be a string' })
  readonly brand: string;
  @IsString({ always: true, message: 'Model must be a string' })
  @MinLength(3, { message: 'Model must be at least 3 characters long' })
  readonly model: string;
}