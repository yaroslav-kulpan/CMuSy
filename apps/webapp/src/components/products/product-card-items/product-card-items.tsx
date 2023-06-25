import { useState, MouseEvent } from 'react';
import { Typography } from '@cmusy/ui';
import { IconLayerGrid, IconLayerGridAlt } from '@cmusy/icons';
import clsx from 'clsx';

import ProductCardItem, { TProductVariant } from '../product-card-item/product-card-item';

type ProductCardsItemsProps = {
  items: any[];
};

const ProductCardsItems = ({ items }: ProductCardsItemsProps) => {
  const [productView, setProductView] = useState<TProductVariant>('grid');
  const gridClassName = clsx('grid gap-7', {
    'grid-cols-2 ': productView === 'grid',
    'grid-cols-1 ': productView === 'list',
  });

  const handleChangeView = (evt: MouseEvent<HTMLButtonElement>) => {
    const view = evt.currentTarget.dataset['view'] as TProductVariant;
    setProductView(view);
  };

  const getProductView = (viewType: TProductVariant) => {
    return viewType === productView ? 'text-primary' : 'text-neutral-gray';
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 mb-4">
        <Typography variant="h5">Menu</Typography>
        <div>
          <button className="mr-2" data-view="grid" onClick={handleChangeView}>
            <IconLayerGrid className={clsx('h-5 w-5', getProductView('grid'))} />
          </button>
          <button data-view="list" onClick={handleChangeView}>
            <IconLayerGridAlt className={clsx('h-5 w-5', getProductView('list'))} />
          </button>
        </div>
      </div>
      <div className={gridClassName}>
        {items.map(({ id, thumbnail, name, price, description }) => (
          <ProductCardItem
            id={id}
            key={id}
            image={thumbnail}
            description={description}
            price={price}
            title={name}
            variant={productView}
          />
        ))}
      </div>
    </>
  );
};

export default ProductCardsItems;
