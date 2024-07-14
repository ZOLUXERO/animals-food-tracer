import { Controller, Get } from '@nestjs/common';

@Controller('dog-food')
export class DogFoodController {

  @Get()
  async getFood() {
    return 'Croquetas de carne';
  }
}
