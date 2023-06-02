import React from 'react';
import {
  AriaTextFieldProps,
  mergeProps,
  useFocusRing,
  useTextField,
} from 'react-aria';
import PropTypes from 'prop-types';

import { HelperText } from '../helper-text';
import { useDomRef } from '../use-dom-ref/use-dom-ref';
import { textField } from './text-field.theme';
import { IconClearable } from './icon-clearable';
import { __DEV__ } from '../utils/assert';
import Typography from '../typography';

type Variant = 'outlined' | 'filled';

export type ITextFieldProps = React.ComponentPropsWithoutRef<'input'> &
  Omit<AriaTextFieldProps, 'isDisabled' | 'isReadOnly' | 'isRequired'> & {
    variant?: Variant;
    color?: 'primary';
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

// TODO: Fix types
const patchOnChange = (event: any, refEl: any) => {
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
      color = 'primary',
      fullWidth = false,
      disabled: isDisabled = false,
      error = false,
      errorMessage = null,
      helperText = null,
      classNameWrapper,
      disablePointerEvents = true,
      readOnly: isReadOnly = false,
      required: isRequired = false,
      clearable= false,
      value,
      className,
      ...restProps
    } = props;
    const inputRef = useDomRef(ref);
    const { inputProps, labelProps, errorMessageProps, descriptionProps } =
      useTextField({ isDisabled, isReadOnly, isRequired, ...props }, inputRef);

    const { focusProps: clearFocusFocusProps } = useFocusRing();
    const {
      input,
      label: labelStyles,
      adornment,
      root,
      startAdornment: startAdornmentStyles,
      endAdornment: endAdornmentStyles,
      clearableButton,
      clearableIcon,
    } = textField({
      variant,
      color,
      disabled: isDisabled,
      error,
      hidden: !label,
      fullWidth,
      clearable,
      startAdornment: !!startAdornment,
      endAdornment: !!endAdornment,
      disablePointerEvents,
      isRequired,
    });

    const handleClearTextFieldValue = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();

      if (!inputRef.current) {
        return;
      }

      const patchedOnChange = patchOnChange(event, inputRef.current);

      patchedOnChange.target.value = '';

      if (props.onChange) {
        props.onChange(patchedOnChange);
      }

      inputRef.current.focus();
    };

    return (
      <div className={root({ className: classNameWrapper })}>
        <Typography
          as="label"
          variant="small-2"
          className={labelStyles()}
          {...labelProps}
        >
          {label}
        </Typography>
        <div className={adornment()}>
          {startAdornment && (
            <div className={startAdornmentStyles()}>{startAdornment}</div>
          )}
          <input
            ref={inputRef}
            className={input({ className })}
            aria-readonly={isReadOnly}
            {...mergeProps(inputProps, restProps)}
          />
          {endAdornment && (
            <div className={endAdornmentStyles()}>{endAdornment}</div>
          )}
          {clearable && (
            <div className={clearableButton()}>
              <button
                type="button"
                onClick={handleClearTextFieldValue}
                aria-label="clear"
                {...clearFocusFocusProps}
              >
                <IconClearable className={clearableIcon()} />
              </button>
            </div>
          )}
        </div>
        {error && !helperText && (
          <HelperText className="text-error" {...errorMessageProps}>
            {errorMessage}
          </HelperText>
        )}
        {!error && helperText && (
          <HelperText {...descriptionProps}>{helperText}</HelperText>
        )}
      </div>
    );
  }
);

if (__DEV__) {
  TextField.displayName = 'CMuSyUI.TextField';
}

TextField.propTypes = {
  color: PropTypes.oneOf(['primary']),
};

export default React.memo(TextField);
