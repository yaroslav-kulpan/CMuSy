'use client';
import { Button, Card, CardContent, TextField, Typography } from '@cmusy/ui';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';
import {usePrice} from "../hooks";

interface IPaymentSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  showCoupon?: boolean;
  showTips?: boolean;
}

export function PaymentSummary({
  shipping,
  total,
  subtotal,
  showCoupon = false,
  showTips = false,
}: IPaymentSummaryProps) {
  const t = useTranslations('paymentSummary');
  const {price: cartTotal} = usePrice({amount: total})
  const {price: cartSubTotal} = usePrice({amount: subtotal})
  const {price: shippingTotal} = usePrice({amount: subtotal})
  return (
    <Card className="mb-12">
      <CardContent>
        <Typography variant="h6" color="text-neutral-black" className="mb-5">
          {t('title')}
        </Typography>
        {(showCoupon || showTips) && (
          <Fragment>
            <div className="grid grid-cols-1 gap-y-6 my-5">
              {showCoupon && (
                <TextField
                  label="Coupon code"
                  placeholder="Enter coupon code"
                  fullWidth
                />
              )}
              {showTips && (
                <TextField label="Tips" placeholder="Tips" fullWidth />
              )}
            </div>
            <span className="h-px inline-block w-full bg-neutral-lightest-gray" />
          </Fragment>
        )}
        {subtotal && (
          <div className="mt-6 flex justify-between items-center mb-3">
            <Typography variant="body-2" color="text-neutral-dark-gray">
              {t('info.subtotal')}
            </Typography>
            <Typography
              variant="subtitle-2"
              color="text-neutral-black"
              className="font-bold"
            >
              {cartSubTotal}
            </Typography>
          </div>
        )}
        <div className="flex justify-between items-center mb-4">
          <Typography variant="body-2" color="text-neutral-dark-gray">
            {t('info.shipping')}
          </Typography>
          <Typography
            variant="subtitle-2"
            color="text-neutral-black"
            className="font-bold"
          >
            {shippingTotal}
          </Typography>
        </div>
        {showTips && (
          <div className="flex justify-between items-center mb-4">
            <Typography variant="body-2" color="text-neutral-dark-gray">
              {t('info.tips')}
            </Typography>
            <Typography
              variant="subtitle-2"
              color="text-neutral-black"
              className="font-bold"
            >
              {shippingTotal}
            </Typography>
          </div>
        )}
        {showCoupon && (
          <div className="flex justify-between items-center mb-4">
            <Typography variant="body-2" color="text-neutral-dark-gray">
              {t('info.discount')}
            </Typography>
            <Typography
              variant="subtitle-2"
              color="text-danger"
              className="font-bold"
            >
              - $5.00
            </Typography>
          </div>
        )}
        <div className="flex justify-between items-center mb-4">
          <Typography variant="body-1" color="text-neutral-black">
            {t('info.total')}
          </Typography>
          <Typography
            variant="subtitle-2"
            color="text-primary"
            className="font-bold"
          >
            {cartTotal}
          </Typography>
        </div>
        <Button
          variant="contained"
          className="whitespace-nowrap"
          color="primary"
          fullWidth
        >
          {t('button')}
        </Button>
      </CardContent>
    </Card>
  );
}
