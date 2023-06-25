import React, { RefObject } from 'react';
import {
  mergeProps,
  AriaSliderThumbProps,
  useFocusRing,
  useSliderThumb,
  VisuallyHidden,
  useHover,
} from 'react-aria';
import { SliderState } from 'react-stately';

import { thumb } from './slider.theme';

type ThumbProps = AriaSliderThumbProps & {
  trackRef: RefObject<HTMLElement>;
  state: SliderState;
};

const Thumb = (props: ThumbProps) => {
  const { state, index, trackRef } = props;
  const inputRef = React.useRef(null);
  const { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state
  );

  const { focusProps, isFocusVisible } = useFocusRing();
  const { hoverProps, isHovered } = useHover({});
  const classes = thumb({
    isDragging,
    isFocusVisible,
    isHovered,
    isDisabled: state.isDisabled,
  });

  return (
    <div
      className={classes}
      role="presentation"
      {...mergeProps(thumbProps, hoverProps)}
    >
      <VisuallyHidden>
        <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
      </VisuallyHidden>
    </div>
  );
};

export default Thumb;
