import { PartialType } from '@nestjs/mapped-types';
import { IsString, MinLength } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';

//export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto {
    @IsString({ always: true, message: 'Brand must be a string' })
    @MinLength(1)
    name: string;
}
