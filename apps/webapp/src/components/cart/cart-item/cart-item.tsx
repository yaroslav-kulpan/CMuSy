'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconDelete } from '@cmusy/icons';
import { Typography } from '@cmusy/ui';

import { Quantity } from '../quantity';
import { usePrice } from '../hooks';

type CartItemProps = {
  item: any;
};

export function CartItem({ item }: CartItemProps) {
  const { src, title, description, total } = item;
  const [quantity, setQuantity] = useState<number>(() => item.quantity);
  const { price } = usePrice({ amount: total * quantity });
  useEffect(() => {
    if (item.quantity !== Number(quantity)) {
      setQuantity(item.quantity);
    }
  }, [item.quantity]);

  const increaseQuantity = async (n = 1) => {
    const val = Number(quantity) + n;
    setQuantity(val);
    //  Add api call for update cart
  };

  return (
    <div className="grid grid-cols-12 pt-4 pb-4 border-b border-neutral-lightest-gray last:border-none">
      <div className="flex items-center gap-x-3 col-span-6">
        <Image
          src={src}
          className="h-20 w-20 rounded-2xl object-cover"
          width={72}
          height={72}
          alt={title}
        />
        <div className="flex flex-col">
          <Typography
            variant="subtitle-1"
            className="inline-block mb-2 text-neutral-black"
          >
            {title}
          </Typography>
          <Typography variant="body-1" className="text-neutral-gray-dark">
            {description}
          </Typography>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-x-12 col-span-6">
        <div className="flex justify-end">
          <Quantity
            value={quantity}
            increase={() => increaseQuantity(1)}
            decrease={() => increaseQuantity(-1)}
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <Typography
            variant="h6"
            className="inline-block text-neutral-black text-center"
          >
            {price}
          </Typography>
          <button className="ml-auto hover:bg-neutral-background p-2 rounded-xl">
            <IconDelete
              width={16}
              height={16}
              className="leading-24 text-neutral-gray-light"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
