"use client";
import { Button, Card, CardContent, TextField, Typography } from '@cmusy/ui';

import { AddressCardItems } from './address-card-items';
import { accountAddresses } from './addresses';

export function AddressesViewPage() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="text-neutral-black" className="mb-4">
          Existing shipping addresses
        </Typography>
        <AddressCardItems addresses={accountAddresses} gridCols="grid-cols-2" />
        <div className="mt-12">
          <Typography variant="h6" color="text-neutral-black">
            New shipping address
          </Typography>
          <div className="mt-4 grid grid-cols-3 gap-x-4">
            <TextField label="Country" placeholder="Enter country" fullWidth />
            <TextField label="State" placeholder="Enter state" fullWidth />
            <TextField label="City" placeholder="Enter city" fullWidth />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-4">
            <TextField
              label="Address line 1"
              placeholder="Enter address"
              fullWidth
            />
            <TextField
              label="Address line 2"
              placeholder="Enter address (optional)"
              fullWidth
            />
          </div>
          <div className="flex justify-end mt-12">
            <Button variant="contained" disabled>
              Add new address
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
