import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsBoolean()
    @IsNotEmpty()
    seal!: boolean
}

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    @IsBoolean()
    @IsNotEmpty()
    seal?: boolean   
}