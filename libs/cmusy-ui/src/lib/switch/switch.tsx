import React from 'react';
import { useToggleState } from 'react-stately';
import {
  useFocusRing,
  useSwitch,
  VisuallyHidden,
  AriaSwitchProps,
} from 'react-aria';
import Typography from '../typography';
import { switchStyles } from './switch.theme';

type SwitchProps = AriaSwitchProps;

export function Switch(props: SwitchProps) {
  const { isDisabled } = props;
  const state = useToggleState(props);
  const ref = React.useRef(null);
  const { inputProps } = useSwitch(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const { base, input, circle } = switchStyles({
    isSelected: state.isSelected,
    isFocusVisible,
    isDisabled,
  });

  return (
    <label className={base()}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <div className={input()}>
        <span className="sr-only">{props.children}</span>
        <span aria-hidden="true" className={circle()} />
      </div>
      <Typography variant="body-1">{props.children}</Typography>
    </label>
  );
}

export default React.memo(Switch);
