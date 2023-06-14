import React, { RefObject } from 'react';
import type { AriaSelectProps } from '@react-types/select';
import { useSelectState } from 'react-stately';
import {
  useSelect,
  HiddenSelect,
  useButton,
  mergeProps,
  useFocusRing,
} from 'react-aria';

import { Popover } from '../popover';
import { ListBox } from './option';
import Typography from '../typography';
import { select } from './select.theme';
import { BaseFormFieldProps } from '../types/base-forms.types';
import { useDomRef } from '../use-dom-ref';
import { IconSelect } from './icon-select';
import { HelperText } from '../helper-text';

export type SelectProps<T extends object> = AriaSelectProps<T> &
  React.ComponentPropsWithoutRef<'select'> &
  BaseFormFieldProps;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps<any>>(
  function Select(props, ref) {
    const {
      required: isRequired = false,
      disabled: isDisabled = false,
      label = null,
      fullWidth = false,
      error = false,
      errorMessage = null,
      helperText = null,
      className,
    } = props;

    const state = useSelectState({
      isRequired,
      isDisabled,
      defaultSelectedKey: String(props.value),
      ...props,
    });
    const selectRef = useDomRef<HTMLSelectElement>(ref);
    // Get props for child elements from useSelect
    const {
      labelProps,
      triggerProps,
      valueProps,
      menuProps,
      errorMessageProps,
      descriptionProps,
    } = useSelect(props, state, selectRef);

    // Get props for the button based on the trigger props from useSelect
    const { buttonProps } = useButton(triggerProps, selectRef);
    const { focusProps, isFocusVisible } = useFocusRing();

    const {
      root,
      select: selectStyles,
      label: labelStyles,
    } = select({
      isOpen: state.isOpen,
      isFocusVisible,
      fullWidth,
      error,
    });

    return (
      <div className={root()}>
        <Typography
          as="label"
          variant="small-2"
          className={labelStyles()}
          {...labelProps}
        >
          {label}
        </Typography>
        <HiddenSelect
          state={state}
          triggerRef={selectRef}
          label={props.label}
          name={props.name}
          isDisabled={isDisabled}
        />
        <button
          {...mergeProps(buttonProps, focusProps)}
          ref={selectRef as never as RefObject<HTMLButtonElement>}
          className={selectStyles()}
        >
          <span {...valueProps}>
            {state.selectedItem
              ? state.selectedItem.rendered
              : 'Select an option'}
          </span>
          <IconSelect />
        </button>

        {state.isOpen && (
          <Popover
            state={state}
            triggerRef={selectRef}
            placement="bottom start"
            className="bg-white shadow-dropdown rounded-lg w-52"
          >
            <ListBox {...menuProps} state={state} />
          </Popover>
        )}
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

export default React.memo(Select);
