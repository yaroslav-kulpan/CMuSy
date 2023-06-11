'use client';
import { Button, Card, CardContent, TextField, Typography } from '@cmusy/ui';
import { useTranslations } from 'next-intl';

export function PaymentViewPage() {
  const t = useTranslations('payment');
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="text-neutral-black" className="mb-4">
          {t('title')}
        </Typography>

        <div className="grid grid-cols-3 gap-x-4">
          <Card className="col-span-3 md:col-span-1">
            <CardContent>
              <div className="flex flex-col gap-y-2">
                <Typography variant="subtitle-1" color="text-neutral-black">
                  **** **** **** 4629
                </Typography>
                <Typography variant="small-2">12/25</Typography>
                <Typography variant="body-2">Jane Robertson</Typography>
              </div>
            </CardContent>
          </Card>
        </div>

        <Typography
          variant="h6"
          color="text-neutral-black"
          className="mt-12 mb-4"
        >
          {t('newPayment.title')}
        </Typography>

        <div className="grid grid-cols-4 gap-x-4 gap-y-8">
          <TextField
            classNameWrapper="col-span-4 md:col-span-2"
            label={t('newPayment.cardNumber.label')}
            placeholder={t('newPayment.cardNumber.placeholder')}
            fullWidth
          />
          <TextField
            classNameWrapper="col-span-2 md:col-span-1"
            label={t('newPayment.expiration.label')}
            placeholder={t('newPayment.expiration.placeholder')}
            fullWidth
          />
          <TextField
            classNameWrapper="col-span-2 md:col-span-1"
            label={t('newPayment.cvc.label')}
            placeholder={t('newPayment.cvc.placeholder')}
            fullWidth
          />
          <TextField
            classNameWrapper="col-span-4"
            label={t('newPayment.cardholder.label')}
            placeholder={t('newPayment.cardholder.placeholder')}
            fullWidth
          />
        </div>

        <div className="flex justify-end mt-8">
          <Button variant="contained" color="primary" disabled>
            {t('newPayment.button')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
