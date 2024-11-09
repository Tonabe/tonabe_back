import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateGoalDTO {
  @IsNumber()
  @IsNotEmpty()
  goal!: number;

  @IsString()
  @IsNotEmpty()
  startDate!: string;

  @IsString()
  @IsNotEmpty()
  endDate!: string;

  @IsNumber()
  @IsNotEmpty()
  idProduct!: number
}

export class UpdateGoalDTO {

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  goal?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  startDate?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  endDate?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  idProduct?: number
}
