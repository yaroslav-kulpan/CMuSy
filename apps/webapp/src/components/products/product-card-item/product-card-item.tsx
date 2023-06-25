import React from 'react';
import Image from 'next/image';
import { Button, Card, CardContent, Typography } from '@cmusy/ui';
import { IconSymboPlus } from '@cmusy/icons';
import { Quantity, usePrice } from '../../cart';

export type TProductVariant = 'list' | 'grid';

interface IProductCardItemProps {
  image: string;
  title: string;
  price: number;
  description: string;
  variant: TProductVariant;
  id: string;
}

const ProductCardItem = ({
  image,
  id,
  title,
  price,
  description,
  variant,
}: IProductCardItemProps) => {
  const formattedPrice = usePrice({ amount: price });
  console.log(image)
  return (
    <Card>
      <CardContent className={variant === 'list' ? 'flex' : undefined}>
        <Image
          src={image}
          width={318}
          height={180}
          className="rounded-2xl"
          alt={title}
        />
        <div className={variant === 'list' ? 'ml-5' : undefined}>
          <Typography variant="h6" className="mt-3 mb-1">
            {title}
          </Typography>
          <Typography variant="body-2" className="text-neutral-gray">
            {description}
          </Typography>
          <div className="flex justify-between items-center mt-3">
            <Typography variant="h4">{formattedPrice.price}</Typography>
            {variant === 'grid' && (
              <button className="p-2 rounded-xl bg-primary-light text-primary hover:bg-primary hover:text-white focus:bg-primary-dark focus:text-white transition duration-150">
                <IconSymboPlus className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        {variant === 'list' && (
          <div className="flex flex-col justify-center items-center">
            <Quantity value={1} />
            <Button
              variant="contained"
              color="light"
              className="whitespace-nowrap mt-6"
            >
              <IconSymboPlus
                strokeWidth={1.5}
                width={18}
                height={18}
                className="mr-2"
              />
              <span>Add to card</span>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCardItem;
