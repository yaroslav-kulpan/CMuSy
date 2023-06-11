import Link from 'next/link';
import Image from 'next/image';
import {
  Button,
  Checkbox,
  PasswordField,
  TextField,
  Typography,
} from '@cmusy/ui';
import { useTranslations } from 'next-intl';

export function LoginForm() {
  const t = useTranslations('login');
  return (
    <div className="flex flex-col flex-1 h-full justify-between mx-auto max-w-sm md:max-w-xs">
      <Link href="/" className="mt-5">
        <Image
          src="/cmusy-logo_for-white-background.svg"
          height={40}
          width={40}
          className="justify-center-none"
          alt="Logo"
        />
      </Link>
      <form>
        <Typography variant="h1" color="text-neutral-black mt-32">
          {t('title')}
        </Typography>
        <Typography variant="body-1" as="p" className="mt-4 mb-8">
          {t('description')}
        </Typography>
        <TextField
          name="email"
          type="email"
          id="email"
          label={t('email.label')}
          placeholder={t('email.placeholder')}
          autoComplete="username"
          required
          fullWidth
        />
        <PasswordField
          name="password"
          autoComplete="current-password"
          id="current-password"
          label={t('password.label')}
          placeholder={t('password.placeholder')}
          classNameWrapper="mt-7"
          required
          fullWidth
        />
        <Checkbox classNameWrapper="mt-8" label={t('rememberMe')} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-10"
          fullWidth
        >
          {t('submit')}
        </Button>
        <Button variant="text" color="primary" className="mt-3" fullWidth>
          {t('forgotPassword')}
        </Button>
      </form>
      <div className="flex justify-center items-center mb-10 whitespace-nowrap">
        <Typography variant="body-1" className="text-neutral-dark">
          {t('register.label')}
        </Typography>
        <Link href="/sign-up" className="text-primary ml-1">
          {t('register.link')}
        </Link>
      </div>
    </div>
  );
}
