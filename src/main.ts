import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config/env.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Payments-Main');

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const PORT = envs.PORT;
  await app.listen(PORT);

  logger.log(`Payments Microservice running on port: ${PORT}`);
}
bootstrap();
