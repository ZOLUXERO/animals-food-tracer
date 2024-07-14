import { Test, TestingModule } from '@nestjs/testing';
import { DogFoodController } from './dog-food.controller';

describe('DogFoodController', () => {
  let controller: DogFoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogFoodController],
    }).compile();

    controller = module.get<DogFoodController>(DogFoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
