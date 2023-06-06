'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';

import {
  Button,
  Card,
  CardContent,
  Checkbox,
  TextField,
  Typography,
} from '@cmusy/ui';

export function ProfileViewPage() {
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
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
              Personal information
            </Typography>
            <div className="mt-5">
              <Typography variant="small-2" className="inline-block mb-2">
                Avatar
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
                  Change
                </Button>
                <Button variant="text" color="secondary">
                  Remove
                </Button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-y-8 gap-x-4">
              <TextField
                {...register('firstName')}
                label="First name"
                placeholder="First name"
                fullWidth
              />

              <TextField
                {...register('lastName')}
                label="Last name"
                placeholder="Last name"
                fullWidth
              />
              <TextField
                {...register('email')}
                type="email"
                label="Email"
                placeholder="Email"
                fullWidth
              />
              <TextField
                type="tel"
                label="Phone"
                placeholder="Phone"
                fullWidth
              />
            </div>

            <div className="mt-12">
              <Typography
                variant="h6"
                color="text-neutral-black"
                className="mb-4"
              >
                Email notifications
              </Typography>

              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                <Checkbox label="New deals" />
                <Checkbox label="Password changes" />
                <Checkbox label="New restaurants" />
                <Checkbox label="Special offers" />
                <Checkbox label="Order statuses" />
                <Checkbox label="Newsletter" />
              </div>
            </div>
          </CardContent>
          <div className="flex justify-between px-5 py-5 mt-5 border-t border-neutral-lightest-gray">
            <Button variant="outlined" color="danger">
              Log out
            </Button>
            <div className="flex gap-x-4">
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleDiscardChange}
              >
                Discard changes
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Save changes
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
}
