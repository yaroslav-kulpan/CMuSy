import React from 'react';
import autosize from 'autosize';
import { AriaTextFieldProps, mergeProps, useTextField } from 'react-aria';

import { BaseFormFieldProps } from '../types/base-forms.types';
import { textarea, TextareaVariants } from './textarea.theme';
import { HelperText } from '../helper-text';
import { useDomRef } from '../use-dom-ref/use-dom-ref';
import Typography from '../typography/typography';

type Variant = 'outlined' | 'filled';

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'> &
  BaseFormFieldProps &
  TextareaVariants &
  Omit<AriaTextFieldProps, 'isDisabled' | 'isReadOnly' | 'isRequired'> & {
    variant?: Variant;
    color?: 'primary';
    minRows?: number;
    maxRows?: number;
    classNameWrapper?: string;
  };

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      label = null,
      startAdornment = null,
      endAdornment = null,
      variant = 'outlined',
      color = 'primary',
      fullWidth = false,
      disabled: isDisabled = false,
      helperText = null,
      classNameWrapper,
      disablePointerEvents = true,
      id: customId,
      readOnly: isReadOnly,
      clearable,
      value,
      className,
      required: isRequired = false,
      error = false,
      errorMessage = null,
      minRows = 3,
      ...restProps
    } = props;
    const textAreaRef = useDomRef(ref);
    const { inputProps, labelProps, errorMessageProps, descriptionProps } =
      useTextField(
        {
          ...props,
          isDisabled,
          isReadOnly,
          isRequired,
          inputElementType: 'textarea',
        },
        textAreaRef
      );
    const {
      input,
      label: labelStyles,
      adornment,
      root,
      startAdornment: startAdornmentStyles,
      endAdornment: endAdornmentStyles,
    } = textarea({
      variant,
      color,
      disabled: isDisabled,
      error,
      hidden: !label,
      fullWidth,
      startAdornment: !!startAdornment,
      endAdornment: !!endAdornment,
      disablePointerEvents,
      isRequired,
    });

    React.useLayoutEffect(() => {
      if (textAreaRef.current) {
        autosize(textAreaRef.current);
      }
    }, [textAreaRef]);

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
          <textarea
            {...mergeProps(inputProps, restProps)}
            ref={textAreaRef}
            className={input()}
            aria-readonly={isReadOnly}
            aria-required={isRequired}
            rows={minRows}
          />
          {endAdornment && (
            <div className={endAdornmentStyles()}>{endAdornment}</div>
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

export default React.memo(Textarea);
