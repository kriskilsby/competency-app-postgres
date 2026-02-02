// competency-app/backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔹 Enable CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',            // local dev
      'http://localhost:3001',            // local dev alternative
      'http://46.101.40.132:3001',        // DO server testing
      'https://www.kriskilsby.com',       // live frontend
      'https://www.kriskilsby.com/competency-phase1', // live frontend subpath
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  const port = Number(process.env.PORT || 3001);
  // await app.listen(port);
  // 🔹 Listen on all interfaces so remote clients can reach it
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 App listening on port ${port}`);
}

bootstrap();
