import React from 'react';

import { Avatar, Button, Dropdown, DropdownItem, Rating, Typography } from '@cmusy/ui';
import { IconThumbDown, IconThumbUpFilled } from '@cmusy/icons';

import { reviews } from './mocks/reviews';

const Reviews = () => {
  return (
    <>
      <Typography variant="h5" className="mb-4 w-16">
        Reviews
      </Typography>
      <div className="border border-neutral-lightest-gray rounded-2xl">
        <div>
          <div className="p-4 border-b border-neutral-lightest-gray">
            <div className="flex justify-items-center justify-between">
              <div>
                <Typography variant="small-1" className="whitespace-nowrap">
                  Overall rating
                </Typography>
                <div className="flex items-center">
                  <Typography variant="h5" className="text-primary">
                    4.2
                  </Typography>
                  <Rating value={4} className="ml-3" label="3 votes" />
                </div>
              </div>
              <Button variant="outlined" className="whitespace-nowrap">
                Leave review
              </Button>
            </div>
          </div>
          <section>
            <div className="flex justify-center mt-2">
              <Dropdown label="Sort by: Neweset first" variant="contained">
                <DropdownItem>Neweset first</DropdownItem>
                <DropdownItem>Older first</DropdownItem>
              </Dropdown>
            </div>
            {reviews.map(({ likes, commentary, name, time, dislikes, avatar, rating }) => (
              <div
                className="flex mx-4 border-b border-neutral-lightest-gray pb-6 pt-3.5"
                key={name}
              >
                <div className="w-9 h-9 rounded-full">
                  <Avatar src={avatar} />
                </div>
                <div className="ml-3">
                  <Typography variant="subtitle-1">{name}</Typography>
                  <Rating value={rating} className="mb-2 mt-1" label={time} />
                  <Typography variant="body-1">{commentary}</Typography>
                  <div className="flex items-center gap-x-5 mt-3">
                    <button className="flex items-center gap-x-2">
                      <IconThumbUpFilled className="h-4 w-4 text-neutral-gray" />
                      <Typography variant="small-2" color="text-neutral-gray">
                        {likes}
                      </Typography>
                    </button>
                    <button className="flex items-center gap-x-2">
                      <IconThumbDown className="h-4 w-4 text-neutral-gray" />
                      <Typography variant="small-2" color="text-neutral-dark-gray">
                        {dislikes}
                      </Typography>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Reviews;
