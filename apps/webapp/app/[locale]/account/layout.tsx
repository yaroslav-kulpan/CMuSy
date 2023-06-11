'use client';
import React, { PropsWithChildren } from 'react';
import { Container, Typography } from '@cmusy/ui';
import { useTranslations } from 'next-intl';
import {
  IconPersonUser,
  IconLocationMapPin,
  IconOtherCreditCard,
  IconShieldOn,
} from '@cmusy/icons';

import Navbar from '../../../src/shared/navbar/navbar';
import { MenuItem } from '../../../src/shared/menu-item';

interface IAccountLayoutProps {
  title: string;
}

export default function AccountLayout({
  children,
}: PropsWithChildren<IAccountLayoutProps>) {
  const t = useTranslations('account');
  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <div className="grid grid-cols-12 gap-x-7 lg:mb-0 md:mb-12">
          <div className="col-span-12 lg:col-span-3 gap-y-3 grid md:col-span-12 md:gap-4 lg:flex lg:flex-col">
            <Typography
              variant="h5"
              as="div"
              color="text-neutral-black"
              className="col-span-12 lg:col-span-3"
            >
              {t('title')}
            </Typography>
            <MenuItem
              href="/account/profile"
              label={t('menu.account.title')}
              variant="horizontal"
              className="col-span-12 md:col-span-6 lg:col-span-12"
              icon={<IconPersonUser className="h-5 w-5" />}
            >
              {t('menu.account.description')}
            </MenuItem>
            <MenuItem
              href="/account/address"
              label={t('menu.shipping.title')}
              variant="horizontal"
              className="col-span-12 md:col-span-6 lg:col-span-12"
              icon={<IconLocationMapPin className="h-5 w-5" />}
            >
              {t('menu.shipping.description')}
            </MenuItem>
            <MenuItem
              href="/account/payment"
              label={t('menu.payment.title')}
              variant="horizontal"
              className="col-span-12 md:col-span-6 lg:col-span-12"
              icon={<IconOtherCreditCard className="h-5 w-5" />}
            >
              {t('menu.payment.description')}
            </MenuItem>
            <MenuItem
              href="/account/security"
              label={t('menu.security.title')}
              variant="horizontal"
              className="col-span-12 md:col-span-6 lg:col-span-3"
              icon={<IconShieldOn className="h-5 w-5" />}
            >
              {t('menu.security.description')}
            </MenuItem>
          </div>
          <div className="col-span-12 lg:col-span-9 w-full mt-5 lg:mt-0 mb-7">
            {children}
          </div>
        </div>
      </Container>
    </>
  );
}
