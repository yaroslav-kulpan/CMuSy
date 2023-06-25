'use client';
import { Card, CardContent, Typography } from '@cmusy/ui';
import { CartItem } from '../cart-item';

interface ICartItemsProps {
  items: any[];
  totalQuantity: number;
}

export function CartItems({ items = [], totalQuantity }: ICartItemsProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-x-2">
          <Typography variant="h6" className="text-neutral-black">
            Menu
          </Typography>
          <Typography variant="small-2" className="text-neutral-gray">
            {totalQuantity} meals
          </Typography>
        </div>
        {items.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </CardContent>
    </Card>
  );
}
