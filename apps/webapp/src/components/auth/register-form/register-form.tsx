'use client';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Step, Stepper, Typography } from '@cmusy/ui';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  AccountInformationStep,
  AccountStep,
  ConfirmationStep,
} from '../steps';

type RegisterInputs = {
  email: string;
  password: string;
  confirmPassword: string;
  verifyCode: string;
  phone: string;
  rememberMe: false;
  turnOneTfa: true;
};

export function RegisterForm() {
  const t = useTranslations('sign-up');
  const [activeStep, setActiveStep] = useState(0);

  const handlePrev = useCallback(() => {
    setActiveStep((prevState) => prevState - 1);
  }, []);

  const handleNext = useCallback(() => {
    setActiveStep((prevState) => {
      return prevState + 1;
    });
  }, []);

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const { register, handleSubmit } = useForm<RegisterInputs>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      verifyCode: '',
      phone: '',
      rememberMe: false,
      turnOneTfa: true,
    },
  });

  return (
    <div className="grid grid-cols-12">
      <div className="lg:col-span-5 md:col-span-12 mx-auto bg-primary lg:min-h-screen min-w-full grid grid-cols-12 relative overflow-hidden lg:pb-0 md:pb-10">
        <div className="lg:col-start-3 lg:col-span-8 md:col-span-6 md:col-start-2">
          <div className="mt-5 lg:mb-32 md:mb-12">
            <Image
              src="/cmusy-logo-main.svg"
              height={40}
              width={40}
              className="justify-center-none"
              alt="CMuSy logotype"
            />
          </div>
          <Typography variant="h3" className="text-neutral-white">
            {t('title')}
          </Typography>
          <Typography
            variant="body-1"
            as="p"
            className="text-neutral-white mt-4 opacity-40"
          >
            {t('subtitle')}
          </Typography>
        </div>
        <img
          src="/page-pick-up.png"
          className="absolute left-0 bottom-0 z-10"
          alt="pickup"
        />
      </div>
      <div className="lg:col-span-5 lg:col-start-7 md:col-start-2 md:col-span-10">
        <div className="flex flex-col flex-1 w-full min-h-full w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stepper
              activeStep={activeStep}
              className="w-full mt-10"
              variant="point"
            >
              <Step label="Account type" variant="point">
                <AccountStep register={register} handleNext={handleNext} />
              </Step>
              <Step label="Additional Info" variant="point">
                <AccountInformationStep
                  register={register}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              </Step>
              <Step label="Confirmation" variant="point">
                <ConfirmationStep register={register} handlePrev={handlePrev} />
              </Step>
            </Stepper>
          </form>
        </div>
      </div>
    </div>
  );
}
