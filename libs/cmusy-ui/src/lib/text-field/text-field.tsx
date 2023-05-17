import React, { useState } from 'react';
import clsx from 'clsx';
import {
  AriaTextFieldOptions,
  mergeProps,
  useFocusRing,
  useTextField,
} from 'react-aria';

import { HelperText } from '../helper-text';
import { Typography } from '../typography';
import { useDomRef } from '../use-dom-ref/use-dom-ref';
import { styles } from './text-field.styles';

type Variant = 'outlined' | 'filled';

export type ITextFieldProps = React.ComponentPropsWithoutRef<'input'> &
  AriaTextFieldOptions<'input'> & {
    variant?: Variant;
    label?: string | null;
    helperText?: string | null;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    fullWidth?: boolean;
    error?: boolean;
    classNameWrapper?: string;
    disablePointerEvents?: boolean;
    clearable?: boolean;
  };

const selfOnChange = (event: any, refEl: any) => {
  return {
    ...event,
    target: refEl,
    currentTarget: refEl,
  };
};

export const TextField = React.forwardRef<HTMLInputElement, ITextFieldProps>(
  (props, ref) => {
    const {
      label = null,
      startAdornment = null,
      endAdornment = null,
      variant = 'outlined',
      fullWidth = false,
      disabled: isDisabled = false,
      error = false,
      helperText = null,
      classNameWrapper,
      disablePointerEvents = true,
      id: customId,
      readOnly: isReadOnly,
      clearable,
      value,
      ...restProps
    } = props;
    const inputRef = useDomRef(ref);
    const { inputProps, labelProps } = useTextField(
      { isDisabled, isReadOnly, ...props },
      inputRef
    );

    const { focusProps: clearFocusFocusProps } = useFocusRing();

    const handleClearTextFieldValue = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();

      if (!inputRef.current) {
        return;
      }

      const nativeEvent = selfOnChange(event, inputRef.current);

      nativeEvent.target.value = '';

      if (props.onChange) {
        props.onChange(nativeEvent);
      }

      inputRef.current.focus();
    };

    const inputClassName = clsx(
      styles.base,
      isDisabled ? styles.variants.disabled : styles.variants[variant],
      {
        'pl-10': startAdornment,
        'pr-10': endAdornment,
        'border-error': error,
      }
    );

    const wrapperClassName = clsx(
      classNameWrapper,
      "group",
      fullWidth ? 'w-full' : 'w-52'
    );

    return (
      <div className={wrapperClassName}>
        <Typography
          variant="small-2"
          className={clsx('inline-block mb-1 group-focus-within:text-primary', {
            hidden: !label,
            'text-neutral-gray-dark': !error && !isDisabled,
            'text-error': error,
            'text-neutral-gray-light': isDisabled,
          })}
          {...labelProps}
        >
          {label}
        </Typography>
        <div className="relative rounded-lg">
          {startAdornment && (
            <div
              className={clsx(
                'absolute inset-y-0 left-0 flex items-center pl-3',
                {
                  'pointer-events-none': disablePointerEvents,
                }
              )}
            >
              {startAdornment}
            </div>
          )}
          <input
            ref={inputRef}
            className={inputClassName}
            aria-readonly={isReadOnly}
            {...mergeProps(inputProps, restProps)}
          />
          {clearable && (
            <div className="absolute inset-y-0 right-3 flex items-center pl-3">
              <button
                type="button"
                onClick={handleClearTextFieldValue}
                aria-label="clear"
                {...clearFocusFocusProps}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15"
                    stroke="#C7C8D2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="#C7C8D2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
          {endAdornment && (
            <div
              className={clsx(
                'absolute inset-y-0 right-0 flex items-center pr-3',
                {
                  'pointer-events-none': disablePointerEvents,
                }
              )}
            >
              {endAdornment}
            </div>
          )}
        </div>
        <HelperText error={error}>{helperText}</HelperText>
      </div>
    );
  }
);
