import React, { useMemo } from 'react';
import { AriaSliderProps, useNumberFormatter, useSlider } from 'react-aria';
import { useSliderState } from 'react-stately';

import Thumb from './thumb';
import Typography from '../typography';
import { slider, SliderVariants } from './slider.theme';
import {Tooltip} from "../tooltip";
import {TooltipButton} from "../tooltip/tooltip-trigger";

type SliderProps = AriaSliderProps &
  SliderVariants & {
    formatOptions?: any;
    multiThumbs?: boolean;
  };
function Slider(props: SliderProps) {
  const { isDisabled, color, multiThumbs = false } = props;
  const trackRef = React.useRef(null);
  const numberFormatter = useNumberFormatter(props.formatOptions);
  const state = useSliderState({ ...props, numberFormatter });

  const { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );

  const isRangeSlider =
    Array.isArray(props.defaultValue) && props.defaultValue.length;

  const fillTrackStyle = useMemo(() => {
    if (!isRangeSlider) {
      const backgroundSize =
        ((state.getThumbValue(0) - state.getThumbMinValue(0)) * 100) /
          (state.getThumbMaxValue(0) - state.getThumbMinValue(0)) +
        '% 100%';

      return {
        width: '100%',
        backgroundSize,
      };
    }

    const min = state.getThumbMinValue(0);
    const max = state.getThumbMaxValue(1);
    const minValue = state.getThumbValue(0);
    const maxValue = state.getThumbValue(1);
    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;

    return {
      left: `${minPos}%`,
      right: `${100 - maxPos}%`,
    };
  }, [isRangeSlider, state]);

  const {
    slider: sliderStyles,
    track,
    labelContainer,
    activeTrack,
  } = slider({ isDisabled, orientation: state.orientation, color });

  const formattedValue = useMemo(() => {
    let value = state.getThumbValueLabel(0);

    if (isRangeSlider) {
      value += ` - ${state.getThumbValueLabel(1)}`;
    }

    return value;
  }, [isRangeSlider, state]);

  return (
    <div {...groupProps} className={sliderStyles()}>
      {/* Create a container for the label and output element. */}
      {props.label && (
        <div className={labelContainer()}>
          <Typography
            variant="body-1"
            className="text-neutral-gray-dark"
            {...labelProps}
          >
            {props.label}
          </Typography>
          <div className="flex">
            <output {...outputProps}>
              <Typography variant="body-1">{formattedValue}</Typography>
            </output>
          </div>
        </div>
      )}
      {/* The track element holds the visible track line and the thumb. */}
      <div {...trackProps} ref={trackRef} className={track()}>
        <div className={activeTrack()} style={fillTrackStyle} />
          <Thumb index={0} state={state} trackRef={trackRef} />
        {isRangeSlider && <Thumb index={1} state={state} trackRef={trackRef} />}
      </div>
    </div>
  );
}
export default React.memo(Slider);
