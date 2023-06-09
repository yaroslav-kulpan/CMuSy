import React from 'react';

export function useDomRef<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null> | React.ForwardedRef<T | null>
) {
  const domRef = React.useRef<T>(null);

  React.useImperativeHandle(ref, () => domRef.current);

  return domRef;
}
