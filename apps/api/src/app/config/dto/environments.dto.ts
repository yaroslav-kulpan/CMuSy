import { Environment } from '../enums/envoroment.enum';
import { IsString } from 'class-validator';

export class EnvironmentVariables {
  // HTTP
  NODE_ENV: Environment;

  @IsString()
  TYPEORM_URL: string;

  // EMAIL
  @IsString()
  EMAIL_HOST: string;

  @IsString()
  EMAIL_PORT: string;

  @IsString()
  EMAIL_ID: string;

  @IsString()
  EMAIL_PASS: string;

  @IsString()
  EMAIL_FROM: string;
}
