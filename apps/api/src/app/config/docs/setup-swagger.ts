import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

export function setupSwagger(
  app: NestFastifyApplication,
  globalPrefix: string
) {
  const config = new DocumentBuilder()
    .setTitle('CMuSy')
    .setDescription('The CMuSy API description')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalPrefix, app, document, {
    customSiteTitle: `CMuSy - An open-source CMS designed for restaurants and e-commerce purposes.`,
  });
}
