import React from 'react';
import { Button, Checkbox, TextField, Typography } from '@cmusy/ui';
import { useTranslations } from 'next-intl';

// TODO: fix any
type AccountInformationProps = {
  register: any;
  handleNext: () => void;
  handlePrev: () => void;
};

export function AccountInformationStep({
  register,
  handleNext,
  handlePrev,
}: AccountInformationProps) {
  const t = useTranslations('sign-up');
  return (
    <div className="lg:max-w-md md:max-w-full flex flex-col flex-1">
      <div className="lg:block md:grid grid-cols-12">
        <div className="col-span-12">
          <Typography
            variant="h2"
            color="text-neutral-black"
            className="mt-20 whitespace-nowrap"
          >
            {t('accountInformationStep.title')}
          </Typography>
          <Typography
            variant="body-1"
            as="p"
            color="text-neutral-dark-gray"
            className="mt-4 mb-8"
          >
            {t('accountInformationStep.subtitle')}
          </Typography>
          <TextField
            label={t('accountInformationStep.phone.label')}
            placeholder={t('accountInformationStep.phone.placeholder')}
            fullWidth
            {...register('phone')}
          />
          <div className="flex mt-7">
            <Checkbox {...register('turnOneTfa')} />
            <Typography variant="body-1">
              {t('accountInformationStep.checkButton')}
            </Typography>
          </div>
        </div>

        <div className="col-span-12 w-full grid grid-cols-2 gap-x-12 lg:block mt-10 lg:ml-0 md:ml-auto">
          <Button
            variant="contained"
            color="primary"
            className="md:order-last"
            onPress={handleNext}
            fullWidth
          >
            {t('continue')}
          </Button>
          <Button
            variant="text"
            color="secondary"
            onPress={handlePrev}
            fullWidth
          >
            {t('back')}
          </Button>
        </div>
      </div>
    </div>
  );
}
