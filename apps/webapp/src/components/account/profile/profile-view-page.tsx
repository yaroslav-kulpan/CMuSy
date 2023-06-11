'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  TextField,
  Typography,
} from '@cmusy/ui';

export function ProfileViewPage() {
  const t = useTranslations('profile');
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      notification: {
        newDeals: true,
        newRestaurants: true,
        orderStatus: false,
        passwordChanges: false,
        specialOffers: false,
        newsletter: false,
      },
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    alert(JSON.stringify(data, null, 2));
    console.log('[SUCCESS]: Data submitted');
  };

  const handleDiscardChange = () => {
    reset({
      firstName: '',
      lastName: '',
      email: '',
    });
    console.log('[DISCARD]: Discard changes');
  };

  return (
    <>
      <Typography
        variant="h5"
        color="text-neutral-black"
        className="mb-4 lg:mt-0 md:mt-12"
      >
        Account
      </Typography>
      <Card className="border-neutral-lightest-gray">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <Typography variant="h6" color="text-neutral-black">
              {t('title')}
            </Typography>
            <div className="mt-5">
              <Typography variant="small-2" className="inline-block mb-2">
                {t('avatar.title')}
              </Typography>
              <div className="flex items-center gap-4">
                <Image
                  src="/avatar.jpg"
                  className="rounded-xl"
                  height={88}
                  width={88}
                  alt="Avatar"
                />
                <Button variant="outlined" color="primary">
                  {t('avatar.change')}
                </Button>
                <Button variant="text" color="secondary">
                  {t('avatar.remove')}
                </Button>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-y-8 gap-x-4">
              <TextField
                {...register('firstName')}
                label={t('firstName.label')}
                placeholder={t('firstName.placeholder')}
                fullWidth
              />
              <TextField
                {...register('lastName')}
                label={t('lastName.label')}
                placeholder={t('lastName.placeholder')}
                fullWidth
              />
              <TextField
                {...register('email')}
                type="email"
                label={t('email.label')}
                placeholder={t('email.placeholder')}
                fullWidth
              />
              <TextField
                type="tel"
                label={t('phone.label')}
                placeholder={t('phone.placeholder')}
                fullWidth
              />
            </div>

            <div className="mt-12">
              <Typography
                variant="h6"
                color="text-neutral-black"
                className="mb-4"
              >
                {t('notification.title')}
              </Typography>

              <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
                <Checkbox
                  {...register('notification.newDeals')}
                  label={t('notification.newDeals')}
                />
                <Checkbox
                  {...register('notification.newRestaurants')}
                  label={t('notification.newRestaurants')}
                />
                <Checkbox
                  {...register('notification.orderStatus')}
                  label={t('notification.orderStatus')}
                />
                <Checkbox
                  {...register('notification.passwordChanges')}
                  label={t('notification.passwordChanges')}
                />
                <Checkbox
                  {...register('notification.specialOffers')}
                  label={t('notification.specialOffers')}
                />
                <Checkbox
                  {...register('notification.newsletter')}
                  label={t('notification.newsletter')}
                />
              </div>
            </div>
          </CardContent>
          <div className="flex justify-between px-5 py-5 mt-5 border-t border-neutral-lightest-gray">
            <Button variant="outlined" color="danger">
              {t('footer.logout')}
            </Button>
            <div className="flex gap-x-4">
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleDiscardChange}
              >
                {t('footer.discard')}
              </Button>
              <Button type="submit" variant="contained" color="primary">
                {t('footer.save')}
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
}
