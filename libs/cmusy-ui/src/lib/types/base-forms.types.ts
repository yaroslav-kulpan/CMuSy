import { ReactNode } from 'react';

export type BaseFormFieldProps = {
  label?: string | null;
  helperText?: string | null;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  inputDirection?: string;
}
