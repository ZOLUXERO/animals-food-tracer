import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogFoodModule } from './dog-food/dog-food.module';
import { DaprService } from './dapr/dapr.service';
import { DaprClient, DaprServer } from '@dapr/dapr';
import { CatFoodModule } from './cat-food/cat-food.module';

@Module({
  imports: [DogFoodModule, CatFoodModule],
  controllers: [AppController],
  providers: [
    AppService,
    DaprService,
    {
      provide: 'DaprServer',
      useValue: new DaprServer({ serverPort: '3002' }),
    },
    {
      provide: 'DaprClient',
      useValue: new DaprClient(),
    }
  ],
  exports: ['DaprClient', 'DaprServer'],
})
export class AppModule { }
