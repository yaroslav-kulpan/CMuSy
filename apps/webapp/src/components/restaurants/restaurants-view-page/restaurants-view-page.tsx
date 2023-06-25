'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Button, Typography } from '@cmusy/ui';
import {products} from "../mocks/products";
import RestaurantsCards from "../restaurants-cards-items/restaurants-cards-items";

const Restaurants = () => {
  const t = useTranslations('restaurants');

  return (
    <div>
      <section className="mx-auto container mt-6">
        <Typography variant="h5">{t('title')}</Typography>
        {/*<RestaurantsCategories items={data.categories} />*/}
        {/* TODO: Load filters from api*/}
        <section className="container mx-auto  mt-4 flex lg:gap-3 lg:justify-start md:justify-between">
          <Button
            variant="small"
            color="secondary"
            className="whitespace-nowrap"
          >
            DINING OPTIONS
          </Button>
          <Button
            variant="small"
            color="secondary"
            className="whitespace-nowrap"
          >
            PRICE RANGE
          </Button>
          <Button
            variant="small"
            color="secondary"
            className="whitespace-nowrap"
          >
            DELIVERY TIME
          </Button>
          <Button
            variant="small"
            color="secondary"
            className="whitespace-nowrap"
          >
            PAYMENT METHODS
          </Button>
          <Button
            variant="small"
            color="secondary"
            className="whitespace-nowrap"
          >
            LOCATION
          </Button>
        </section>
      </section>
      <section className="container mx-auto mt-8">
        <Typography
          variant="small-2"
          color="text-neutral-dark-gray"
          className="mb-1"
        >
          {t('subtitle')}
        </Typography>
        <RestaurantsCards restaurants={products} />
        <div className="mt-11 mb-16 flex items-center justify-center">
          {/* TODO: Add fetch more realisation*/}
          <Button variant="outlined">{t('button')}</Button>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;
