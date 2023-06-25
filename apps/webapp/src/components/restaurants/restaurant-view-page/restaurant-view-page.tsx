'use client';
import { useParams } from 'next/navigation';

import ProductCardsItems from '../../products/product-card-items/product-card-items';
import RestaurantDescription from '../restaurant-description/restaurant-description';
import Reviews from '../../reviews/reviews';
import { products } from '../mocks/products';
import { Container } from '@cmusy/ui';

const RestaurantPage = () => {
  const { slug: restaurantId } = useParams();
  const restaurant = {};

  return (
    <>
      <RestaurantDescription restaurant={restaurant} />
      <Container className="mb-8">
        <section className="grid grid-cols-12">
          <div className="mr-7 lg:col-span-8 md:col-span-12">
            <ProductCardsItems items={products} />
          </div>
          <div className="mt-8 lg:col-span-4 md:col-span-12">
            <Reviews />
          </div>
        </section>
      </Container>
    </>
  );
};

export default RestaurantPage;
