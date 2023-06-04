import { useRef, useState } from 'react';

interface IPinCodeInput {
  pinLength?: number;
  onChange?: (pinCode: string) => void;
}

export function PinCodeInput({ pinLength = 4, onChange }: IPinCodeInput) {
  const refs = useRef<any>({});
  const [values, setValues] = useState(() => {
    return Object.assign(
      {},
      Array.from({ length: pinLength }, () => '')
    );
  });

  const handleChange = (evt: any) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [Number(evt.target.name)]: evt.target.value,
      };
    });

    if (onChange) {
      onChange(values.join(''));
    }
  };

  const handleStepForward = (evt: any) => {
    const idx = +evt.target.dataset.idx;
    if (evt.target.value && idx !== pinLength - 1) {
      refs.current[idx + 1].focus();
    }
  };

  const handleStepBack = (evt: any) => {
    const idx = +evt.target.dataset.idx;
    if (evt.key === 'Backspace' || evt.key === 'Delete') {
      const next = idx - 1;

      setValues((prevState) => {
        return {
          ...prevState,
          [pinLength - 1]: '',
        };
      });

      if (next > -1) {
        refs.current[next].focus();
      }
    }
  };

  return (
    <div className="grid grid-cols-6 gap-x-4">
      {Array.from({ length: pinLength }).map((l, idx) => (
        <input
          type="text"
          name={String(idx)}
          maxLength={1}
          max={9}
          min={0}
          className="h-12 w-12 rounded-xl text-center"
          ref={(ref) => (refs.current[idx] = ref)}
          data-idx={idx}
          onKeyUp={handleStepForward}
          onKeyDown={handleStepBack}
          id={String(idx)}
          onChange={handleChange}
          inputMode="decimal"
          autoFocus={idx === 0}
          key={String(idx)}
          value={values[idx]}
        />
      ))}
    </div>
  );
}
