import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsNumber()
    @IsNotEmpty()
    name!: string;

    @IsBoolean()
    @IsNotEmpty()
    seal!: boolean
}

export class UpdateProductDto {
    @IsNumber()
    @IsNotEmpty()
    name!: string;

    @IsBoolean()
    @IsNotEmpty()
    seal!: boolean   
}