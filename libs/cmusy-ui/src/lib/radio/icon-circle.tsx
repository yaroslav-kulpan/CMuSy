import React from 'react';

type IconCircleProps = React.ComponentPropsWithoutRef<'svg'>;
export function IconCircle(props: IconCircleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
    </svg>
  );
}
