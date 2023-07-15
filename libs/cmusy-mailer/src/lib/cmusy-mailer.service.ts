import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

import { MailJobInterface } from './interfaces/mail-job.interface';
import { QueuesConstants } from './queues.constants';

@Injectable()
export class MailService {
  constructor(@InjectQueue(QueuesConstants.email) private mailQueue: Queue) {}

  async sendMail(payload: MailJobInterface, type: string): Promise<boolean> {
    try {
      await this.mailQueue.add(type, {
        payload,
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
