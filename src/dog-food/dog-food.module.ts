import { Module } from "@nestjs/common";
import { DogFoodService } from "./services/dog-food.service";

@Module({
  imports: [],
  controllers: [],
  providers: [DogFoodService],
  exports: [DogFoodService],
})
export class DogFoodModule { }
