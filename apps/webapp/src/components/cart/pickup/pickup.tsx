"use client";
import { Typography } from '@cmusy/ui';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

type PickupProps = {
  variant?: 'cart' | 'order';
};

const style = {
  cart: {
    className: 'inline-block mt-5 mb-3',
    variant: 'small-2',
    color: 'text-neutral-gray',
  },
  order: {
    className: 'inline-block mb-4',
    variant: 'h6',
    color: 'text-neutral-black',
  },
};
export function Pickup({ variant = 'cart' }: PickupProps) {
  const t = useTranslations('cart');

  return (
    <>
      <Typography
        variant={style[variant].variant as any}
        color={style[variant].color}
        className={clsx(style[variant].className)}
      >
        {t('pickup.title')}
      </Typography>

      <div className="relative h-56 w-full rounded-xl">
        <Image
          className="rounded-xl"
          src="/address-map-big.png"
          alt="map big"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <Typography
        variant="subtitle-1"
        color="text-neutral-black"
        className="block mt-2"
      >
        San Diego
      </Typography>
      <Typography
        variant="small-2"
        color="text-neutral-gray"
        className="block mt-0.5"
      >
        California State, USA
      </Typography>
      <Typography
        variant="body-2"
        color="text-neutral-dark-gray"
        className="block mt-2"
      >
        3891 Ranchview Dr. Richardson, 62639
      </Typography>
    </>
  );
}
