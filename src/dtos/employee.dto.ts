import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateEmployeeDTO {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    hiringDate!: string;
}

export class UpdateEmployeeDTO {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    hiringDate?: string;
}