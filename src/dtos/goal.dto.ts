import { IsDate, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateGoalDTO {
  @IsNumber()
  @IsNotEmpty()
  goal!: number;

  @IsNotEmpty()
  @IsDate()
  date!: Date;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  idProduct!: number
}

export class UpdateGoalDTO {
  
  @IsNumber()
  @IsNotEmpty()
  goal?: number;

  @IsOptional()
  @IsDate()
  @IsNotEmpty()
  date?: Date;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  idProduct?: number
}
