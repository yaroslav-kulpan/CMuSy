import { Logger } from '@nestjs/common';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';
import { ConfigService } from '@nestjs/config';

import { MailJobInterface } from './interfaces/mail-job.interface';
import { ProcessorEmailConstants, QueuesConstants } from './queues.constants';

@Processor(QueuesConstants.email)
export class MailProcessor {
  private readonly logger = new Logger(MailProcessor.name);

  constructor(
    private readonly mailerService: MailerService,
    private configService: ConfigService
  ) {}

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(
      `Processing job ${job.id} of type ${job.name}. Data: ${JSON.stringify(
        job.data
      )}`
    );
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    this.logger.debug(
      `Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(
        result
      )}`
    );
  }

  @OnQueueFailed()
  onError(job: Job<any>, error: any) {
    this.logger.error(
      `Failed job ${job.id} of type ${job.name}: ${error.message}`,
      error.stack
    );
  }

  @Process(ProcessorEmailConstants.SYSTEM)
  async sendEmail(
    job: Job<{
      payload: MailJobInterface;
      type: string;
    }>
  ): Promise<any> {
    this.logger.log(`Sending email to '${job.data.payload.to}'`);

    const payload = job.data.payload;

    try {
      const options: ISendMailOptions = {
        to: payload.to,
        from: this.configService.get('EMAIL_FROM'),
        subject: payload.subject,
        template: payload.template,
        context: payload.context,
        attachments: payload.attachments,
      };

      return await this.mailerService.sendMail({ ...options });
    } catch (error: any) {
      this.logger.error(
        `Failed to send email to '${job.data.payload.to}'`,
        error.stack
      );
      throw error;
    }
  }
}
