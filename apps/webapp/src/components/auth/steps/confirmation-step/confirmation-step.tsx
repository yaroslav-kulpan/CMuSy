import { Button, Checkbox, TextField, Typography } from '@cmusy/ui';
import React from 'react';
import { useTranslations } from 'next-intl';

type ConfirmationStepProps = {
  register: any;
  handlePrev: () => void;
};

export function ConfirmationStep({
  register,
  handlePrev,
}: ConfirmationStepProps) {
  const t = useTranslations('sign-up');
  return (
    <div className="lg:max-w-md md:max-w-full lg:flex flex-col flex-1 lg:block md:grid grid-cols-12">
      <div className="col-span-12">
        <Typography
          variant="h2"
          color="text-neutral-black"
          className="mt-20 whitespace-nowrap"
        >
          {t('confirmationStep.title')}
        </Typography>
        <Typography
          variant="body-1"
          as="p"
          color="text-neutral-dark-gray"
          className="mt-4 mb-12"
        >
          {t('confirmationStep.subtitle')}
        </Typography>
        <TextField
          {...register('verifyCode')}
          label={t('confirmationStep.code.label')}
          placeholder={t('confirmationStep.code.placeholder')}
          fullWidth
        />
        <Checkbox
          {...register('rememberMe')}
          classNameWrapper="mt-7"
          label={t('confirmationStep.checkButton')}
        />
      </div>
      <div
        className={
          'md:grid grid-cols-2 gap-x-12 lg:block mt-10 lg:ml-0 md:ml-auto col-span-12'
        }
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="md:order-last"
          fullWidth
        >
          {t('continue')}
        </Button>
        <Button
          variant="text"
          color="secondary"
          className="lg:mt-3 md:mt-0 md:order-first"
          onPress={handlePrev}
          fullWidth
        >
          {t('back')}
        </Button>
      </div>
    </div>
  );
}
