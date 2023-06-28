import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app/app.module';
import { setupSwagger } from './app/config/docs/setup-swagger';
import { AppConfigService } from './app/config/services/app-config.service';
import {ConfigModule} from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const configService = app.get(AppConfigService);
  const globalPrefix = configService.serverConfig.prefix;
  const host = configService.serverConfig.host;
  const port = configService.serverConfig.port;

  app.setGlobalPrefix(globalPrefix);

  if (configService.isDevelopment) {
    setupSwagger(app, globalPrefix);
  }

  await app.listen(port, host);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
