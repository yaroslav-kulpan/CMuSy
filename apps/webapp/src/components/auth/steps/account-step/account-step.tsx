import React from 'react';
import { useTranslations } from 'next-intl';
import { Button, PasswordField, TextField, Typography } from '@cmusy/ui';

// TODO: fix any
type AccountStepProps = {
  register: any;
  handleNext: () => void;
};

export function AccountStep({ register, handleNext }: AccountStepProps) {
  const t = useTranslations('sign-up');
  return (
    <div className="flex flex-col flex-1">
      <Typography variant="h2" color="text-neutral-black" className="mt-20">
        {t('accountStep.title')}
      </Typography>
      <Typography
        variant="body-1"
        as="p"
        color="text-neutral-dark-gray"
        className="mt-4 mb-12"
      >
        {t('accountStep.subtitle')}
      </Typography>
      <div className="gap-y-7 grid grid-cols-12 gap-x-7">
        <div className="md:col-span-12 lg:col-span-7">
          <TextField
            label={t('accountStep.email.label')}
            placeholder={t('accountStep.email.placeholder')}
            fullWidth
            required
            {...register('email')}
          />
        </div>
        <div className="md:col-span-6 lg:col-span-7">
          <PasswordField
            label={t('accountStep.password.label')}
            placeholder={t('accountStep.password.placeholder')}
            fullWidth
            required
            {...register('password')}
          />
        </div>
        <div className="md:col-span-6 lg:col-span-7">
          <PasswordField
            label={t('accountStep.confirmPassword.label')}
            placeholder={t('accountStep.confirmPassword.placeholder')}
            fullWidth
            required
            {...register('confirmPassword')}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className="mt-3 md:w-52 ml-auto md:col-span-12 lg:col-span-7 lg:w-full"
          onPress={handleNext}
          fullWidth
        >
          {t('continue')}
        </Button>
      </div>
    </div>
  );
}
