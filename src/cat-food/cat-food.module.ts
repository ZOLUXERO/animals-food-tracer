import { Module } from "@nestjs/common";
import { CatFoodController } from "./controller/cat-food.controller";

@Module({
  imports: [],
  controllers: [CatFoodController],
  exports: [CatFoodController],
  providers: [CatFoodController],
})
export class CatFoodModule { }
