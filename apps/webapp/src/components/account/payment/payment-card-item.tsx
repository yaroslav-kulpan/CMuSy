'use client';
import { Card, CardContent, Typography } from '@cmusy/ui';

export function PaymentCartItem() {
  return (
    <Card>
      <CardContent className="grid grid-cols-8">
        <div className="flex items-center gap-x-3 col-span-7">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <Typography variant="subtitle-1" color="text-neutral-black">
                **** **** **** 4629
              </Typography>
            </div>
            <Typography
              variant="small-2"
              color="text-neutral-gray"
              className="inline-block mt-1"
            >
              12/25
            </Typography>
            <Typography
              variant="body-2"
              color="text-neutral-dark-gray"
              className="inline-block mt-2"
            >
              Jane Robertson
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
