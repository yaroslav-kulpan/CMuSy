import React, { useId } from 'react';
import { useFocusRing } from 'react-aria';

import TextField, { ITextFieldProps } from '../text-field';
import { IconEyeOff } from './Icon-eye-off';
import { IconEyeOn } from './Icon-eye-on';
import clsx from 'clsx';

type PasswordFieldProps = ITextFieldProps & {
  iconEyeOff?: React.FC<React.SVGAttributes<SVGElement>>;
  iconEyeOn?: React.FC<React.SVGAttributes<SVGElement>>;
};

export const PasswordField = React.forwardRef<
  HTMLInputElement,
  PasswordFieldProps
>(function PasswordField(props, ref) {
  const [showPassword, setShowPassword] = React.useState(false);
  const { focusProps: toggleFocusProps } = useFocusRing();
  const id = useId();
  const togglePassword = () => setShowPassword((prevState) => !prevState);
  const type = showPassword ? 'text' : 'password';
  const ariaLabel = showPassword
    ? 'Hide password.'
    : 'Show password as plain text. Warning: this will display your password on the screen.';
  const {
    iconEyeOff: IconEyeSlash = IconEyeOff,
    iconEyeOn: IconEye = IconEyeOn,
  } = props;

  const icon = showPassword ? (
    <IconEyeSlash
      className={clsx(
        'h-5 w-5 text-neutral-gray-light transition-colors duration-150',
        {
          'hover:text-neutral-gray': !props.disabled,
        }
      )}
    />
  ) : (
    <IconEye
      className={clsx(
        'h-5 w-5 text-neutral-gray-light transition-colors duration-150',
        {
          'hover:text-neutral-gray': !props.disabled,
        }
      )}
    />
  );

  return (
    <TextField
      ref={ref}
      type={type}
      disablePointerEvents={false}
      endAdornment={
        <button
          type="button"
          id={`toggle-password-${id}`}
          aria-label={ariaLabel}
          onClick={togglePassword}
          {...toggleFocusProps}
          disabled={props.disabled}
        >
          {icon}
        </button>
      }
      {...props}
    />
  );
});

export default React.memo(PasswordField);
