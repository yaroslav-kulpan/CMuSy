"use client";
import { Button, Card, CardContent, Typography } from '@cmusy/ui';
import { useTranslations } from 'next-intl';

import { PaymentCartItem } from './payment-card-item';

export function PaymentCardItems() {
  const t = useTranslations('paymentSummary');
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <PaymentCartItem />
      <Card>
        <CardContent className="h-full flex justify-center items-center">
          <div className="flex flex-col items-center">
            <Button
              variant="text"
              color="primary"
              className="mb-2 rounded-full"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 2.5V9.5"
                  className="stroke-current"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 6H9.5"
                  className="stroke-current"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Typography variant="small-1" color="text-neutral-dark-gray">
              {t('subtitle')}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
