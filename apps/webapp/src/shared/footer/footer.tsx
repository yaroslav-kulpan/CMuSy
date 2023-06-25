'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge, Button, Container, TextField, Typography } from '@cmusy/ui';

interface IFooterProps {
  hideFooter?: boolean;
}

const Footer = ({ hideFooter = false }: IFooterProps) => {
  if (hideFooter) {
    return null;
  }

  return (
    <footer className="mt-auto bg-neutral-black pt-14 pb-12">
      <Container>
        <div className="grid grid-cols-2">
          <Link href="/" className="mr-12 w-11 h-11">
            <Image
              src="/cmusy-logo_for-white-background.svg"
              height={44}
              width={44}
              alt="Header logo"
            />
          </Link>
          <div className="grid grid-cols-3 ">
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">
                Responses
              </h3>
              <ul role="list" className="mt-2 space-y-1">
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    How it works
                  </Typography>
                </li>
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Guarantee
                  </Typography>
                </li>
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Security
                  </Typography>
                </li>
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Pricing
                  </Typography>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">
                Company
              </h3>
              <ul role="list" className="mt-2 space-y-1">
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    About us
                  </Typography>
                </li>
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Prices
                  </Typography>
                </li>
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Blog
                  </Typography>
                </li>
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    License
                  </Typography>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">
                Support
              </h3>
              <ul role="list" className="mt-2 space-y-1">
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Getting started
                  </Typography>
                </li>
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Help center
                  </Typography>
                </li>
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
                    variant="body-2"
                    className="text-neutral-gray-light"
                  >
                    Report a bug
                  </Typography>
                </li>
                <li>
                  <Typography
                    as={Link}
                    href="/how-it-works"
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
      </Container>

      <Container>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <TextField
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <Button type="submit" className="h-11">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </Container>

      <Container>
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Image
              src="/icons/social/circled-facebook.svg"
              height={24}
              width={24}
              alt="facebook"
            />
            <Image
              src="/icons/social/circled-twitter.svg"
              height={24}
              width={24}
              alt="twitter"
            />
            <Image
              src="/icons/social/circled-instagram.svg"
              height={24}
              width={24}
              alt="instagram"
            />
            <Image
              src="/icons/social/circled-youtube.svg"
              height={24}
              width={24}
              alt="youtube"
            />
            <Image
              src="/icons/social/circled-facebook.svg"
              height={24}
              width={24}
              alt="facebook"
            />
          </div>
          <div>
            <Typography variant="body-2" className="text-neutral-gray mr-2">
              &copy; {new Date().getFullYear()} Food delivery kit. All Rights Reserved.
            </Typography>
            <Typography
              as={Link}
              href="/"
              variant="body-2"
              className="text-neutral-gray-light"
            >
              Terms of Use
            </Typography>
            <Badge variant="dot" color="primary" />
            <Typography
              as={Link}
              href="/"
              variant="body-2"
              className="text-neutral-gray-light"
            >
              Privacy Policy
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default memo(Footer);
