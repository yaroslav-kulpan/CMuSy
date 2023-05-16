import React from 'react';

import { ITextFieldProps, TextField } from '../text-field';

type PasswordFieldProps = ITextFieldProps & {
  IconEyeSlash?: React.ReactNode;
  IconEye?: React.ReactNode;
};

export const PasswordField = React.forwardRef<
  HTMLInputElement,
  PasswordFieldProps
>(function PasswordField(props, ref) {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => setShowPassword((prevState) => !prevState);
  const type = showPassword ? 'text' : 'password';
  const ariaLabel = showPassword
    ? 'Hide password.'
    : 'Show password as plain text. Warning: this will display your password on the screen.';

  const { IconEyeSlash, IconEye } = props;

  const icon = showPassword ? (
    <span className="text-neutral-light-gray" />
  ) : (
    <span className="text-neutral-light-gray" />
  );

  return (
    <TextField
      ref={ref}
      type={type}
      disablePointerEvents={false}
      className="pr-10"
      endAdornment={
        <button
          type="button"
          id="toggle-password"
          aria-label={ariaLabel}
          onClick={togglePassword}
        >
          {icon}
        </button>
      }
      {...props}
    />
  );
});

export default React.memo(PasswordField);
