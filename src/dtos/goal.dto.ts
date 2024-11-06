import { IsDate, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateGoalDTO {
  @IsNumber()
  @IsNotEmpty()
  goal!: number;

  @IsNotEmpty()
  @IsDate()
  startDate!: Date;

  @IsNotEmpty()
  @IsDate()
  endDate!: Date;

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
  @IsDate()
  startDate?: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  endDate?: Date;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  idProduct?: number
}
