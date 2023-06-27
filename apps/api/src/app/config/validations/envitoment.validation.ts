import {IsString, validateSync} from 'class-validator';
import {plainToInstance} from "class-transformer";

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

enum Environment {
  Development = "development",
  Production = "production",
  Test = "test",
  Provision = "provision",
}

export function validateEnv(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(
    EnvironmentVariables,
    config,
    { enableImplicitConversion: true },
  );
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
