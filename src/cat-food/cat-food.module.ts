import { Module } from "@nestjs/common";
import { CatFoodController } from "./controller/cat-food.controller";

@Module({
  imports: [],
  controllers: [],
  exports: [CatFoodController],
  providers: [CatFoodController],
})
export class CatFoodModule { }
