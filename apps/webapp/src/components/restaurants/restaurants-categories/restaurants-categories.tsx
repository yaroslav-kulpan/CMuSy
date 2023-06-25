import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import {MenuItem} from "../../../shared/menu-item";


interface RestaurantsCategoriesProps {
  items: any[];
}

export function RestaurantsCategories({ items }: RestaurantsCategoriesProps) {
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  const toggleSelectedItem = useCallback(
    (id: string) => () => {
      const selected = new Set(selectedCategories);
      if (selectedCategories.has(id)) {
        selected.delete(id);
      } else {
        selected.add(id);
      }

      setSelectedCategories(selected);
    },
    [selectedCategories]
  );

  return (
    <section className="container mx-auto lg:mt-8 md:mt-4 grid grid-cols-6 gap-8">
      {items.map(({ id, name, image }) => (
        <MenuItem key={id} onClick={toggleSelectedItem(id)}>
          <Image src={image} height={24} width={24} alt={name} loading="lazy" />
          {name}
        </MenuItem>
      ))}
    </section>
  );
}
