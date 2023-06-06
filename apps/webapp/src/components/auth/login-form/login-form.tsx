import Link from 'next/link';
import Image from 'next/image';
import {
  Button,
  Checkbox,
  PasswordField,
  TextField,
  Typography,
} from '@cmusy/ui';

export function LoginForm() {
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
          Login
        </Typography>
        <Typography variant="body-1" as="p" className="mt-4 mb-8">
          Sign in with your data that you entered during your registration.
        </Typography>
        <TextField
          name="email"
          label="Email"
          type="email"
          id="email"
          autoComplete="username"
          required
          fullWidth
        />
        <PasswordField
          name="password"
          label="Password"
          autoComplete="current-password"
          id="current-password"
          classNameWrapper="mt-7"
          required
          fullWidth
        />
        <Checkbox classNameWrapper="mt-8" label="Keep me logged in" />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-10"
          fullWidth
        >
          Login
        </Button>
        <Button variant="text" color="primary" className="mt-3" fullWidth>
          Forgot password
        </Button>
      </form>
      <div className="flex justify-center items-center mb-10 whitespace-nowrap">
        <Typography variant="body-1" className="text-neutral-dark">
          Don’t have an account?
        </Typography>
        <Link href="/sign-up" className="text-primary ml-1">
          Sign up
        </Link>
      </div>
    </div>
  );
}
