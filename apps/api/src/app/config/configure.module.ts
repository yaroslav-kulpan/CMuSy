import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {__PRODUCTION__} from './config.constants';
import load from './loaders/load';
import {AppConfigService} from './services/app-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: __PRODUCTION__,
      load: [load],
    }),
  ],
  providers: [AppConfigService],
})
export class ConfigurationModule {
}
