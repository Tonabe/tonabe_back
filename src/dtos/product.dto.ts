import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsBoolean()
    @IsNotEmpty()
    seal!: boolean
}

export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsBoolean()
    @IsNotEmpty()
    seal!: boolean   
}