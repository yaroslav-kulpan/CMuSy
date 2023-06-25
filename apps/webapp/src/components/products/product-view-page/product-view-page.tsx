"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Button, Typography } from '@cmusy/ui';
import clsx from 'clsx';
import { IconSymboMinus, IconSymboPlus } from '@cmusy/icons';
import React from 'react';
import { useTranslations } from 'next-intl';
import {productCardsItemsMock} from "../mocks/products-cards-items";
import ProductCardItem from "../product-card-item/product-card-item";

const Product = () => {
  const t = useTranslations('product');
  return (
    <div>
      <section className="mx-auto container">
        <div className="mt-6">
          <Link href="/restaurant">
              <button className="flex items-center gap-2">
                <Image
                  src="/icons/directions/chevron-left.svg"
                  alt="back"
                  width={20}
                  height={20}
                ></Image>
                <Typography variant="small-1">{t('backButton')}</Typography>
              </button>
          </Link>
        </div>
        <div className="grid grid-cols-12 mt-6">
          <div
            className="lg:col-span-1 lg:flex-col lg:flex lg:mr-4 lg:mt-0 gap-3 lg:order-first
           md:col-span-12 md:grid md:grid-cols-12 md:mr-0 md:mt-4 md:order-2"
          >
            {productCardsItemsMock.map(({ image }, idx) => (
              <div
                key={idx}
                className={clsx('border rounded-xl', {
                  'border-neutral-lightest-gray': idx !== 1,
                  'border-primary': idx === 1,
                })}
              >
                <Image
                  src={image}
                  width={78}
                  height={78}
                  layout="responsive"
                  className={clsx('rounded-xl', { 'opacity-40': idx !== 1 })}
                  alt={image}
                />
              </div>
            ))}
          </div>
          <div
            className="lg:col-span-7 lg:mr-7 lg:order-2
           md:mr-0 md:order-first md:col-span-12"
          >
            <Image
              src="/products/img5.png"
              width={635}
              height={480}
              layout="responsive"
              className="rounded-xl"
              alt="/products/img5.png"
            />
          </div>
          <div
            className="lg:col-span-4 order-last lg:mt-0
          md:col-span-12 md:mt-12"
          >
            <Typography variant="h4" className="text-neutral-black">
              Nigiri set
            </Typography>
            <Typography variant="body-1" className="text-neutral-gray mt-2">
              Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod
              corpora, et saepe. No malis harum saperet eum, eu minim perfecto salutandi cum, usu at
              constituto mnesarchum.
            </Typography>
            <div className="flex justify-between items-center mt-7 lg:pb-0 md:pb-6">
              <Typography variant="h4" className="text-neutral-black">
                $ 16.80
              </Typography>
              <div className="flex items-center">
                <div className="mr-6 flex items-center">
                  <button
                    className="p-2 rounded-full bg-primary-light text-neutral-light-gray hover:bg-primary
                   hover:text-white focus:bg-primary-dark focus:text-white transition duration-150"
                  >
                    <IconSymboMinus strokeWidth={1.5} width={10} height={10} />
                  </button>
                  <Typography variant="subtitle-1" className="mx-2">
                    1
                  </Typography>
                  <button
                    className="p-2 rounded-xl bg-primary-light text-neutral-black hover:bg-primary
                   hover:text-white focus:bg-primary-dark focus:text-white transition duration-150"
                  >
                    <IconSymboPlus strokeWidth={1.5} width={10} height={10} />
                  </button>
                </div>
                <Button variant="contained" className="flex items-center gap-2">
                  {t('button')}
                  <IconSymboPlus width={16} height={16} />
                </Button>
              </div>
            </div>
            <div
              className="lg:border-none lg:block lg:pt-14
             md:border-1 md:border-t md:border-neutral-lightest-gray md:pt-6 md:grid md:grid-cols-2"
            >
              <div>
                <Typography variant="small-1" as="p" className="text-neutral-black  mb-1">
                  {t('productInfo.ingredients')}
                </Typography>
                <Typography variant="body-2" as="p" className="text-neutral-gray">
                  Lorem ipsum dolor sit amet, pri atqui facete evertitur an, ea assum solet invidunt
                  vim.
                </Typography>
              </div>
              <div className="lg:mt-6 md:mt-0">
                <Typography variant="small-1" as="p" className="text-neutral-black  mb-1">
                  {t('productInfo.nutritionalValue')}
                </Typography>
                <Typography variant="body-2" as="p" className="text-neutral-gray">
                  Proteins - 7.11, Fats - 5.17, Carbohydrates - 18.40, 146 kkal. (for 100 g.)
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto container mb-12 mt-12">
        <Typography variant="h5" className="text-neutral-black">
          {t('subTitle')}
        </Typography>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-7 lg:mt-12 md:mt-4">
          {productCardsItemsMock.map(({ image, title, price, description, id }) => (
            <ProductCardItem
              id={id}
              key={title + price}
              image={image}
              description={description}
              price={+price}
              title={title}
              variant="grid"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
