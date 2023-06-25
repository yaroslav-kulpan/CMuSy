'use client';
import React from 'react';

import { RestaurantCard } from '../restaurant-card/restaurant-card';

interface RestaurantsCategoriesProps {
  restaurants: any[];
}

function RestaurantsCards({ restaurants = [] }: RestaurantsCategoriesProps) {
  return (
    <div className="mt-3 grid lg:grid-cols-3 md:grid-cols-2 gap-7">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsCards;
