'use client';
import React, { memo } from 'react';
import Link from 'next/link';

import { Badge, Typography } from '@cmusy/ui';

interface IFooterProps {
  hideFooter?: boolean;
}

const Footer = ({ hideFooter = false }: IFooterProps) => {
  if (hideFooter) {
    return null;
  }

  return (
    <footer className="mt-auto bg-neutral-black pt-14 pb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <Link href="/" className="mr-12 w-11 h-11">
              Home
            </Link>
            <ul className="flex mr-4 rb-10 mb-10 mt-4 gap-2">
              <li>
                {/*<Image*/}
                {/*  src="/icons/social/circled-facebook.svg"*/}
                {/*  height={24}*/}
                {/*  width={24}*/}
                {/*/>*/}
              </li>
              <li>
                {/*<Image*/}
                {/*  src="/icons/social/circled-twitter.svg"*/}
                {/*  height={24}*/}
                {/*  width={24}*/}
                {/*/>*/}
              </li>
              <li>
                {/*<Image*/}
                {/*  src="/icons/social/circled-instagram.svg"*/}
                {/*  height={24}*/}
                {/*  width={24}*/}
                {/*/>*/}
              </li>
              <li>
                {/*<Image*/}
                {/*  src="/icons/social/circled-youtube.svg"*/}
                {/*  height={24}*/}
                {/*  width={24}*/}
                {/*/>*/}
              </li>
              <li>
                {/*<Image*/}
                {/*  src="/icons/social/circled-facebook.svg"*/}
                {/*  height={24}*/}
                {/*  width={24}*/}
                {/*/>*/}
              </li>
            </ul>
            <Typography variant="body-2" className="text-neutral-gray mr-2">
              © 2021 Food delivery kit. All Rights Reserved.
            </Typography>
            <Link href="/">
              <Typography variant="body-2" className="text-neutral-gray-light">
                Terms of Use
              </Typography>
            </Link>
            <Badge variant="dot" color="secondary" />
            <Link href="/">
              <Typography variant="body-2" className="text-neutral-gray-light">
                Privacy Policy
              </Typography>
            </Link>
          </div>
          <div className="grid grid-cols-3 ">
            <div>
              <Typography variant="small-1" className="text-white">
                Responses
              </Typography>
              <ul>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    How it works
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Guarantee
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Security
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Pricing
                  </Typography>
                </li>
              </ul>
            </div>
            <div>
              <Typography variant="small-1" className="text-white">
                Company
              </Typography>
              <ul>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    About us
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Prices
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Blog
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    License
                  </Typography>
                </li>
              </ul>
            </div>
            <div>
              <Typography variant="small-1" className="text-white">
                Support
              </Typography>
              <ul>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Getting started
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Help center
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Report a bug
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Contact us
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
