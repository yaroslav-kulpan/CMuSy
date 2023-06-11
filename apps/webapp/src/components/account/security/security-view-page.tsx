'use client';
import {
  Button,
  Card,
  CardContent,
  PasswordField,
  TextField,
  Typography,
} from '@cmusy/ui';
import { useTranslations } from 'next-intl';

export function SecurityViewPage() {
  const t = useTranslations('security');
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="text-neutral-black">
          {t('authentication.title')}
        </Typography>

        <div className="mt-4 grid grid-cols-2">
          <TextField
            classNameWrapper="col-span-2 md:col-span-1"
            name="phone"
            type="tel"
            label={t('authentication.phoneNumber.label')}
            placeholder={t('authentication.phoneNumber.placeholder')}
            fullWidth
          />
          <div className="mt-8 md:mt-0 col-span-2 md:col-span-1 flex justify-end items-end">
            <Button
              variant="contained"
              color="primary"
              className="w-full md:w-36"
            >
              {t('authentication.phoneNumber.button')}
            </Button>
          </div>
        </div>
        <Typography
          variant="h6"
          color="text-neutral-black"
          className="mt-12 mb-4"
        >
          {t('changePassword.title')}
        </Typography>

        <div className="grid grid-cols-3 gap-y-4 gap-x-4">
          <PasswordField
            classNameWrapper="col-span-3 md:col-span-1"
            label={t('changePassword.current.label')}
            placeholder={t('changePassword.current.placeholder')}
            fullWidth
          />
          <PasswordField
            classNameWrapper="col-span-3 md:col-span-1"
            label={t('changePassword.new.label')}
            placeholder={t('changePassword.new.placeholder')}
            fullWidth
          />
          <PasswordField
            classNameWrapper="col-span-3 md:col-span-1"
            label={t('changePassword.confirm.label')}
            placeholder={t('changePassword.confirm.placeholder')}
            fullWidth
          />
        </div>

        <div className="flex justify-end mt-8">
          <Button
            variant="contained"
            color="primary"
            className="w-full md:w-52"
            disabled
          >
            {t('changePassword.button')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
