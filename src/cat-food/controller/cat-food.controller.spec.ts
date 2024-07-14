import { Test, TestingModule } from '@nestjs/testing';
import { CatFoodController } from './cat-food.controller';

describe('CatFoodController', () => {
  let controller: CatFoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatFoodController],
    }).compile();

    controller = module.get<CatFoodController>(CatFoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
