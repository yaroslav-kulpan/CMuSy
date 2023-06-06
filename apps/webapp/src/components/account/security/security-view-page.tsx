'use client';
import {Button, Card, CardContent, PasswordField, TextField, Typography} from '@cmusy/ui';

export function SecurityViewPage() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="text-neutral-black">
          2 factor authentication
        </Typography>

        <div className="mt-4 grid grid-cols-2">
          <TextField
            type="tel"
            label="Phone number"
            placeholder="(217) 555-0113"
            fullWidth
          />
          <div className="flex justify-end items-end">
            <Button
              variant="contained"
              color="primary"
              className="shadow-button"
            >
              Turn on
            </Button>
          </div>
        </div>
        <Typography
          variant="h6"
          color="text-neutral-black"
          className="mt-12 mb-4"
        >
          Change password
        </Typography>

        <div className="grid grid-cols-3 gap-x-4">
          <PasswordField
            label="Current password"
            placeholder="Enter current password"
            fullWidth
          />
          <PasswordField
            label="New password"
            placeholder="Enter new password"
            fullWidth
          />
          <PasswordField
            label="Confirm new password"
            placeholder="Confirm new password"
            fullWidth
          />
        </div>

        <div className="flex justify-end mt-8">
          <Button variant="contained" color="primary" disabled>
            Change password
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
