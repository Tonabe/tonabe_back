import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateServiceDTO {
    @IsNotEmpty()
    @IsNumber()
    idEmployee!: number

    @IsNotEmpty()
    @IsNumber()
    idProduct!: number

    @IsNotEmpty()
    @IsNumber()
    goal!: number

    @IsNotEmpty()
    @IsNumber()
    quantity!: number

    @IsNotEmpty()
    @IsNumber()
    duration!: number

    @IsNotEmpty()
    @IsString()
    date!: string
}

export class UpdateServiceDTO {
    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    idEmployee?: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    idProduct?: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    goal?: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    quantity?: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    duration?: number

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    date?: string
}