'use client';
import { useTranslations } from 'next-intl';
import {
  Button,
  Card,
  CardContent,
  TabItem,
  Tabs,
  Typography,
} from '@cmusy/ui';
import { IconStraightArrowsLeft } from '@cmusy/icons';

import { PaymentSummary } from '../payment-summary';
import { Pickup } from '../pickup';
import { accountAddresses } from '../../account/address/addresses';
import AddressCardItems from '../../account/address/address-card-items';
import { CartItems } from '../cart-items/cart-items';
import { cartItemsMock } from '../mocks/cart-items-mock';

export function CartViewPage() {
  const t = useTranslations('cart');

  return (
    <div className="container mx-auto mt-6">
      <Typography variant="h5" color="text-neutral-black" className="mb-4">
        {t('title')}
      </Typography>
      <div className="grid grid-cols-6 gap-x-8">
        <div className="lg:col-span-4 md:col-span-6">
          <CartItems items={cartItemsMock} totalQuantity={800} />
          <Button
            variant="text"
            color="primary"
            className="mt-3 flex center gap-2"
          >
            <IconStraightArrowsLeft width={16} height={16} />
            {t('menu.add-meals')}
          </Button>
        </div>
        <div className="lg:col-span-2 lg:block lg:mt-0 md:col-span-6 md:grid md:grid-cols-2 md:gap-7 md:mt-10">
          <Card className="lg:mb-7 md:mb-auto">
            <CardContent>
              <Tabs fullWidth>
                <TabItem title={t('tabs.delivery')}>
                  <Typography
                    variant="small-2"
                    color="text-neutral-gray"
                    className="inline-block mt-5 mb-3"
                  >
                    {t('address.select')}
                  </Typography>
                  <AddressCardItems
                    addresses={accountAddresses}
                    gridCols="grid-cols-1"
                  />
                  <Button variant="text" color="primary" fullWidth>
                    {t('address.add')}
                  </Button>
                </TabItem>
                <TabItem title={t('tabs.pickup')}>
                  <Pickup />
                </TabItem>
              </Tabs>
            </CardContent>
          </Card>
          <PaymentSummary
            subtotal={129.4}
            shipping={20.0}
            total={800}
            showCoupon={false}
            showTips={false}
          />
        </div>
      </div>
    </div>
  );
}
