import React from 'react';
import { useTooltipTriggerState } from 'react-stately';
import { useTooltipTrigger, TooltipTriggerProps } from 'react-aria';
import { Tooltip } from './tooltip';
import { AriaPopoverProps } from '@react-aria/overlays';

type TooltipTrigger = TooltipTriggerProps &
  Omit<AriaPopoverProps, 'popoverRef'> & {
    tooltip: string;
  };

export function TooltipTrigger(props: React.PropsWithChildren<TooltipTrigger>) {
  const state = useTooltipTriggerState(props);
  const tooltipTriggerRef = React.useRef(null);
  // Get props for the trigger and its tooltip
  const { triggerProps, tooltipProps } = useTooltipTrigger(
    { ...props, delay: props.delay || 0 },
    state,
    tooltipTriggerRef
  );

  return (
    <span className="relative">
      <button ref={tooltipTriggerRef} {...triggerProps}>
        {props.children}
      </button>
      {state.isOpen && (
        <Tooltip state={state} {...tooltipProps}>
          {props.tooltip}
        </Tooltip>
      )}
    </span>
  );
}
