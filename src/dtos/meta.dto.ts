import { IsDate, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateMetaDTO {
  @IsNumber()
  @IsNotEmpty()
  meta!: number;

  @IsNotEmpty()
  @IsDate()
  data!: Date;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  idProduto!: number
}

export class UpdateMetaDTO {
  
  @IsNumber()
  @IsNotEmpty()
  meta?: number;

  @IsOptional()
  @IsDate()
  @IsNotEmpty()
  data?: Date;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  idProduto?: number
}
