'use client';
import { useTranslations } from 'next-intl';
import { Button, Card, CardContent, TextField, Typography } from '@cmusy/ui';

import { AddressCardItems } from './address-card-items';
import { accountAddresses } from './addresses';

export function AddressesViewPage() {
  const t = useTranslations('address');
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="text-neutral-black" className="mb-4">
          {t('existingShippingAddresses.title')}
        </Typography>
        <AddressCardItems addresses={accountAddresses} gridCols="grid-cols-2" />
        <div className="mt-12">
          <Typography variant="h6" color="text-neutral-black">
            {t('newShippingAddress.title')}
          </Typography>
          <div className="mt-4 grid grid-cols-3 gap-y-8 gap-x-4">
            <TextField
              classNameWrapper="col-span-3 md:col-span-1"
              label={t('newShippingAddress.country.label')}
              placeholder={t('newShippingAddress.country.placeholder')}
              fullWidth
            />
            <TextField
              classNameWrapper="col-span-3 md:col-span-1"
              label={t('newShippingAddress.state.label')}
              placeholder={t('newShippingAddress.state.placeholder')}
              fullWidth
            />
            <TextField
              classNameWrapper="col-span-3 md:col-span-1"
              label={t('newShippingAddress.city.label')}
              placeholder={t('newShippingAddress.city.placeholder')}
              fullWidth
            />
          </div>
          <div className="mt-8 md:mt-3 grid grid-cols-2 gap-y-8 gap-x-4">
            <TextField
              classNameWrapper="col-span-3 md:col-span-1"
              label={t('newShippingAddress.firstLine.label')}
              placeholder={t('newShippingAddress.firstLine.placeholder')}
              fullWidth
            />
            <TextField
              classNameWrapper="col-span-3 md:col-span-1"
              label={t('newShippingAddress.secondLine.label')}
              placeholder={t('newShippingAddress.secondLine.placeholder')}
              fullWidth
            />
          </div>
          <div className="flex justify-end mt-12">
            <Button variant="contained" className="w-full md:w-52" disabled>
              {t('newShippingAddress.button')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
