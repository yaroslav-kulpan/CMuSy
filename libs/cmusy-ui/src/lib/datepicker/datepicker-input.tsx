import TextField, { ITextFieldProps } from '../text-field';
import { IconDatepicker } from './datepicker-icon';
import { useButton } from '@react-aria/button';
import { useRef } from 'react';

type IDatepickerInput = ITextFieldProps & {
  handleOpenCalendar: () => void;
  handleChange: (value: any) => void;
};

export const DatepickerInput = ({
  handleOpenCalendar: onPress,
  handleChange,
  value,
}: IDatepickerInput) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(
    {
      onPress,
    },
    ref
  );

  return (
    <TextField
      placeholder="dd/mm/yyyy"
      onChange={handleChange}
      label="Datepicker"
      endAdornment={
        <button
          ref={ref}
          className="w-5 h-5 absolute right-0 top-1/2 -translate-y-1/2 mr-3"
          {...buttonProps}
        >
          <IconDatepicker className="w-5 h-5 text-neutral-black" />
        </button>
      }
      value={value}
    />
  );
};
