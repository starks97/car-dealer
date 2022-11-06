import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class updateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: 'Brand must be a string' })
  @IsOptional()
  readonly brand?: string;

  @IsString({ always: true, message: 'Model must be a string' })
  @MinLength(3, { message: 'Model must be at least 3 characters long' })
  @IsOptional()
  readonly model?: string;
}