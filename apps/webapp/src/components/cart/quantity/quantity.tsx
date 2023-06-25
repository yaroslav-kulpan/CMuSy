'use client';
import { IconSymboMinus, IconSymboPlus } from '@cmusy/icons';
import { Typography } from '@cmusy/ui';

export interface QuantityProps {
  value: number;
  increase?: () => any;
  decrease?: () => any;
  max?: number;
}

export function Quantity({
  max = 6,
  value,
  decrease,
  increase,
}: QuantityProps) {
  const isDisabled = value < 1 || value >= max;

  return (
    <div className="flex items-center gap-x-3">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= 1}
        className="p-1.5 rounded-lg bg-neutral-gray-lightest text-neutral-black disabled:opacity-50 transition duration-150"
      >
        <IconSymboMinus width={12} height={12} />
      </button>
      <Typography variant="subtitle-1" className="text-neutral-black font-bold">
        {value}
      </Typography>
      <button
        type="button"
        onClick={increase}
        disabled={isDisabled}
        className="p-1.5 bg-neutral-gray-lightest hover:bg-neutral-gray-light rounded-lg disabled:opacity-50 transition duration-150"
      >
        <IconSymboPlus width={12} height={12} />
      </button>
    </div>
  );
}
