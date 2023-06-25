'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Badge, Card, CardContent, CardTitle, Typography } from '@cmusy/ui';
import { IconClock, IconShopShoppingBag } from '@cmusy/icons';

import { usePrice } from '../../cart';

interface RestaurantCardProps {
  restaurant: Record<string, any>;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const {
    id,
    maxDeliveryTime,
    minDeliveryTime,
    name,
    image,
    categories = [],
    minSumOrder,
    stickers,
  } = restaurant;
  const { price } = usePrice({
    amount: minSumOrder,
  });

  return (
    <Link href={`/restaurants/${id}`}>
      <Card className="relative hover:bg-primary-lightest hover:border-primary-hover transition duration-150">
     <div className="relative w-full h-[200px]">
       <Image
         src={image}
         fill
         priority
         className="object-cover rounded-tl-2xl rounded-tr-2xl"
         alt={name}
       />
     </div>

        {stickers && (
          <Badge
            variant="sticker"
            color="primary"
            className="absolute top-0 right-0"
            key={stickers + name}
          >
            {stickers}
          </Badge>
        )}
        <CardContent>
          <CardTitle
            title={name}
            icon={<IconShopShoppingBag className="h-5 w-5" />}
          >
            <div className="flex gap-x-2 items-center">
              <IconClock className="h-3.5 w-3.5 text-neutral-light-gray" />
              <Typography variant="small-2" className="text-neutral-gray">
                `${minDeliveryTime}-${maxDeliveryTime} min`
              </Typography>
              <Badge variant="dot" color="primary" />
              <Typography variant="small-2" className="text-neutral-gray">
                {price} min sum
              </Typography>
            </div>
          </CardTitle>
          <div className="flex gap-2 mt-3.5">
            {categories.map(({ image, id, name }) => (
              <Badge variant="text" color="secondary" key={id}>
                <Image
                  src={image}
                  width={12}
                  height={12}
                  alt={name}
                  title={name}
                />
                <Typography variant="small-2" className="ml-2">
                  {name}
                </Typography>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
