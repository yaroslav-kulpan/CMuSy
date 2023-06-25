import React from 'react';
import { mergeProps, useTooltip, AriaTooltipProps } from 'react-aria';
import { TooltipTriggerState } from 'react-stately';

type TooltipProps = AriaTooltipProps & {
  state: TooltipTriggerState;
};
export const Tooltip = React.forwardRef<
  HTMLSpanElement,
  React.PropsWithChildren<TooltipProps>
>(({ state, ...props }, ref) => {
  const { tooltipProps } = useTooltip(props, state);
  return (
    <span
      ref={ref}
      className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-md py-1 px-2 pointer-events-none z-50"
      {...mergeProps(props, tooltipProps)}
    >
      {props.children}
    </span>
  );
});

export default React.memo(Tooltip);
