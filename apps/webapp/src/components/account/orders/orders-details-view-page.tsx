'use client';
import {
  Badge,
  Card,
  CardContent,
  Container,
  Step,
  Typography,
  Stepper,
} from '@cmusy/ui';
import {
  IconCalendar,
  IconChevronLeft,
  IconLocationMapPin,
} from '@cmusy/icons';
import { useTranslations } from 'next-intl';

export function OrdersDetailsViewPage() {
  const t = useTranslations('order');
  return (
    <Container className="mt-6">
      <div className="flex items-center">
        <button className="flex items-center">
          <IconChevronLeft />
          <Typography variant="small-1">{t('button')}</Typography>
        </button>
      </div>
      <div className="grid grid-cols-12 gap-7 mt-6">
        <div className="lg:col-span-9 md:col-span-12">
          <Card className="mb-7">
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Typography variant="h6" color="text-neutral-black">
                    {t('subtitle')}
                  </Typography>
                  <Typography variant="subtitle-2" color="text-neutral-black">
                    ID 67352427
                  </Typography>
                </div>
                <div className="flex items-center gap-x-2">
                  <Typography variant="small-2" color="text-neutral-gray">
                    Bahama Breeze
                  </Typography>
                  <IconLocationMapPin
                    width={16}
                    height={16}
                    className="text-neutral-light-gray"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <Badge variant="dot" color="primary">
                  {t('status')}
                </Badge>
                <div className="flex gap-x-2">
                  <Typography variant="small-2" color="text-neutral-gray">
                    21 September 2020, 05:51 am
                  </Typography>
                  <IconCalendar
                    width={16}
                    height={16}
                    className="text-neutral-light-gray"
                  />
                </div>
              </div>
              <Stepper activeStep={3} className="mt-6">
                <Step label="Order placed" description="23:14" />
                <Step label="Order being prepared" description="23:23" />
                <Step label="Out for delivery" description="23:39" />
                <Step label="Delivered" description="23:57 approx" />
              </Stepper>
            </CardContent>
          </Card>
          {/*<CartItems items={cartItemsMock} />*/}
        </div>
        <div
          className="lg:col-span-3 lg:block
         md:col-span-12 md:grid md:grid-cols-2 md:gap-7"
        >
          <Card className="lg:mb-7 md:mb-auto">
            <CardContent>{/*<Pickup variant="order" />*/}</CardContent>
          </Card>
          {/*<PaymentSummary subtotal={129} shipping={20} total={149} />*/}
        </div>
      </div>
    </Container>
  );
}
