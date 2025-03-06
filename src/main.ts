import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log('Global Middleware One executed');
  next();
}

function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('Global Middleware Two executed');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
