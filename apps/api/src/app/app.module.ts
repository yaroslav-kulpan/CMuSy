import { Module } from '@nestjs/common';

import { ConfigurationModule } from './config/configure.module';

@Module({
  imports: [ConfigurationModule],
})
export class AppModule {}
