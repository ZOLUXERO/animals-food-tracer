import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DaprService } from './dapr/dapr.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const subscriber = app.get(DaprService);
  await subscriber.start();
  await app.listen(3001);
}
bootstrap();
