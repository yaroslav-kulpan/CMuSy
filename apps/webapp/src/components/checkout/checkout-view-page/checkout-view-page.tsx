'use client';
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  TextField,
  Typography,
} from '@cmusy/ui';

import { PaymentCardItems } from '../../account/payment';
import { PaymentSummary } from '../../cart';

export function CheckoutView() {
  return (
    <div className="mt-5">
      <Typography
        as="button"
        variant="small-1"
        color="text-neutral-dark-gray"
        className="flex items-center gap-x-2 mb-6"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="#545563"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to cart
      </Typography>
      <div className="grid grid-cols-12 gap-x-8">
        <div className="col-span-8">
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                color="text-neutral-black"
                className="mb-4"
              >
                Select payment method
              </Typography>
              <PaymentCardItems />
              <Typography
                variant="h6"
                color="text-neutral-black"
                className="mt-12 mb-4"
              >
                New payment method
              </Typography>

              <div className="grid grid-cols-4 gap-x-4 gap-y-8">
                <TextField
                  label="Card number"
                  placeholder="XXXX - XXXX - XXXX - XXXX"
                  classNameWrapper="col-span-2"
                  fullWidth
                  disabled
                />
                <TextField
                  label="Expiration"
                  placeholder="MM / YYYY"
                  fullWidth
                  disabled
                />
                <TextField label="CVC" placeholder="XXX" fullWidth disabled />
                <TextField
                  label="Cardholder"
                  placeholder="Enter name on card"
                  classNameWrapper="col-span-4"
                  fullWidth
                  disabled
                />
              </div>

              <div className="flex inline-center justify-between mt-8">
                <Checkbox label="Save this payment method" />
                <Button variant="text" color="primary" disabled>
                  Add new payment method
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-4">
          <PaymentSummary
            showCoupon
            showTips
            subtotal={129.4}
            shipping={20.0}
            total={149.4}
          />
        </div>
      </div>
    </div>
  );
}
