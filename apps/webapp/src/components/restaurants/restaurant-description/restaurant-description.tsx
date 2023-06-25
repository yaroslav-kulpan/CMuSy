'use client';
import React, { memo } from 'react';
import Image from 'next/image';
import { Badge, Container, Typography } from '@cmusy/ui';
import { IconClock } from '@cmusy/icons';
import { usePrice } from '../../cart';

interface RestaurantDescriptionProps {
  restaurant: any;
}

const RestaurantDescription = ({ restaurant }: RestaurantDescriptionProps) => {
  const {
    name,
    logo = '/products/img.png',
    minDeliveryTime,
    maxDeliveryTime,
    minSumOrder,
  } = restaurant;

  const { price } = usePrice({
    amount: minSumOrder,
  });

  return (
    <div className="bg-neutral-background">
      <Container className="mx-auto container">
        <div className="grid grid-cols-12 py-6">
          <div className="lg:col-span-6 md:col-span-12 flex items-center">
            <div className="bg-neutral-white py-4 px-4 rounded-2xl lg:mr-6 md:mr-8">
              <div className="relative h-36 w-56">
                <Image src={logo} className="object-cover rounded-2xl" fill alt="Royal" />
              </div>
            </div>
            <div>
              <Typography variant="h2" className="text-neutral-black">
                {name}
              </Typography>
              <Typography
                variant="body-1"
                className="text-neutral-dark-gray mt-1"
              >
                Veri lobortis contentiones sed ad, duo eu clita dissentiet. Nam
                primis eligendi salutandi eu, an deseruisse ullamcorper vis.
              </Typography>
              <div className="flex gap-x-2 items-center mt-5">
                <IconClock className="w-4 h-4 text-neutral-light-gray" />
                <Typography variant="small-2" className="text-neutral-gray">
                  {minDeliveryTime}-{maxDeliveryTime}
                  {' min'}
                </Typography>
                <Badge variant="dot" color="primary"></Badge>
                <Typography variant="small-2" className="text-neutral-gray">
                  {price} min sum
                </Typography>
              </div>
            </div>
          </div>
          {/* TODO: Add map with location of restaurant */}
          <div className="relative lg:col-start-10 lg:col-span-3 md:col-start-1 md:col-span-12 h-full border border-neutral-white rounded-2xl border-4 h-60 md:mt-8 lg:mt-0">
            <Image
              src="/snazzy-image-1.png"
              width={350}
              height={232}
              priority
              className="rounded-2xl object-cover"
              alt="Map"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default memo(RestaurantDescription);
