'use client';
import React, { PropsWithChildren } from 'react';
import { Container, Typography } from '@cmusy/ui';

import { MenuItem } from '../../src/shared/menu-item/menu-item';

interface IAccountLayoutProps {
  title: string;
}

export default function AccountLayout({
  children,
}: PropsWithChildren<IAccountLayoutProps>) {
  return (
    <Container className="mt-5">
      <div className="grid grid-cols-12 gap-x-7 lg:mb-0 md:mb-12">
        <div className="col-span-12 lg:col-span-3 gap-y-3 grid md:col-span-12 md:gap-4 lg:flex lg:flex-col">
          <Typography
            variant="h5"
            as="div"
            color="text-neutral-black"
            className="col-span-12 lg:col-span-3"
          >
            Settings
          </Typography>
          <MenuItem
            href="/account/profile"
            label="Profile"
            variant="horizontal"
            className="col-span-12 md:col-span-6 lg:col-span-12"
          >
            Personal information
          </MenuItem>
          <MenuItem
            href="/account/address"
            label="Address"
            variant="horizontal"
            className="col-span-12 md:col-span-6 lg:col-span-12"
          >
            Shippings addresses
          </MenuItem>
          <MenuItem
            href="/account/payment"
            label="Payment method"
            variant="horizontal"
            className="col-span-12 md:col-span-6 lg:col-span-12"
          >
            Connected credit cards
          </MenuItem>
          <MenuItem
            href="/account/security"
            label="Security"
            variant="horizontal"
            className="col-span-12 md:col-span-6 lg:col-span-3"
          >
            Password, 2FA
          </MenuItem>
        </div>
        <div className="col-span-12 lg:col-span-9 w-full mt-5 lg:mt-0 mb-7">
          {children}
        </div>
      </div>
    </Container>
  );
}
