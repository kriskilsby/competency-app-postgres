import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔹 Enable CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://competencyapp-api.azurewebsites.net',
      'https://www.kriskilsby.com',
      'https://www.kriskilsby.com/competency-phase1',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  const port = Number(process.env.PORT || 3001);
  await app.listen(port);
  console.log(`🚀 App listening on port ${port}`);
}

bootstrap();
