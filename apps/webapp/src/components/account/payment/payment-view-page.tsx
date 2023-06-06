'use client';
import { Button, Card, CardContent, TextField, Typography } from '@cmusy/ui';

export function PaymentViewPage() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="text-neutral-black" className="mb-4">
          Connected payment methods
        </Typography>

        <div className="grid grid-cols-3 gap-x-4">
          <Card>
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
          New payment method
        </Typography>

        <div className="grid grid-cols-4 gap-x-4 gap-y-8">
          <TextField
            label="Card number"
            placeholder="XXXX - XXXX - XXXX - XXXX"
            classNameWrapper="col-span-2"
            fullWidth
          />
          <TextField label="Expiration" placeholder="MM / YYYY" fullWidth />
          <TextField label="CVC" placeholder="XXX" fullWidth />
          <TextField
            label="Cardholder"
            placeholder="Enter name on card"
            classNameWrapper="col-span-4"
            fullWidth
          />
        </div>

        <div className="flex justify-end mt-8">
          <Button variant="contained" color="primary" disabled>
            Add new payment method
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
