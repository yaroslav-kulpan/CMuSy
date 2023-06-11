import { Card, CardContent, Typography } from '@cmusy/ui';
import Image from 'next/image';

import { IAccountAddresses } from './addresses';

type IAddressCardItemProps = IAccountAddresses;

export function AddressCardItem({
  address,
  country,
  city,
}: IAddressCardItemProps) {
  return (
    <Card className="col-span-3 md:col-span-1">
      <CardContent className="grid grid-cols-8">
        <div className="flex items-center gap-x-3 col-span-7">
          <div className="relative w-24 h-20 rounded-xl">
            <Image src="/address-map.png" fill alt={address} />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <Typography variant="subtitle-1" color="text-neutral-black">
                {city}
              </Typography>
            </div>
            <Typography
              variant="small-2"
              color="text-neutral-gray"
              className="inline-block mt-1"
            >
              {country}
            </Typography>
            <Typography
              variant="body-2"
              color="text-neutral-dark-gray"
              className="inline-block mt-2"
            >
              {address}
            </Typography>
          </div>
        </div>
        <div className="flex justify-end items-start">
          <button>
            <svg
              width={16}
              height={16}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM8 4a.667.667 0 1 0 0-1.334A.667.667 0 0 0 8 4ZM8 13.333A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333Z"
                fill="#83859C"
                stroke="#83859C"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default AddressCardItem;
