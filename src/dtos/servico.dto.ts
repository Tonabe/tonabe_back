import { IsDate, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateServicoDTO {
    @IsNotEmpty()
    @IsNumber()
    idFuncionario!: number;

    @IsNotEmpty()
    @IsNumber()
    idProduto!: number;

    @IsNotEmpty()
    @IsNumber()
    quantidade!: number;

    @IsNotEmpty()
    @IsNumber()
    duracao!: number;

    @IsNotEmpty()
    @IsNumber()
    meta!: number;

    @IsNotEmpty()
    @IsDate()
    data!: Date;
}

export class UpdateServicoDTO {
    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    idFuncionario!: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    idProduto!: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    quantidade!: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    duracao!: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    meta!: number

    @IsOptional()
    @IsDate()
    @IsNotEmpty()
    data!: Date
}