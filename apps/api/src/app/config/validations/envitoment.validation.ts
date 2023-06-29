import {validateSync} from 'class-validator';
import {ClassConstructor, plainToInstance} from 'class-transformer';

export function validate(config: Record<string, unknown>, cls: ClassConstructor<any>) {
  const validatedConfig = plainToInstance(cls, config, {
    enableImplicitConversion: true,
  });

    const errors = validateSync(validatedConfig, {
      skipMissingProperties: false,
    });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
