import { Typography } from '@cmusy/ui';
import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

export function RegisterLink() {
  const t = useTranslations('sign-up');
  return (
    <div className="flex justify-start md:justify-center items-center mt-5 whitespace-nowrap">
      <Typography variant="body-1" className="text-neutral-dark">
        {t('register.label')}
      </Typography>
      <Link href="/sign-up" className="text-primary ml-1">
        {t('register.link')}
      </Link>
    </div>
  );
}
