import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

import { MailProcessor } from './mail.processor';
import { QueuesConstants } from './queues.constants';
import { MailService } from './cmusy-mailer.service';
import { ConfigurableModuleClass } from './config.module-definition';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Mail } from './entities/mail.entity';

@Module({
  imports: [
    BullModule.registerQueue({
      name: QueuesConstants.email,
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      // useClass: MailerConfigService,
    }),
    TypeOrmModule.forFeature([Mail]),
  ],
  providers: [MailService, MailProcessor],
  exports: [MailService],
})
export class CmusyMailerModule extends ConfigurableModuleClass {}
