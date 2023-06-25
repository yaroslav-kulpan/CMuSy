import Link from 'next/link';
import { Container } from '@cmusy/ui';

export function NavbarTop() {
  const isAuthenticated = false;
  return (
    <div className="bg-neutral-black">
      <Container>
        <div className="grid grid-cols-3 items-center h-10">
          <form className="hidden lg:block lg:flex-1">
            <div className="flex">
              <label htmlFor="desktop-currency" className="sr-only">
                Currency
              </label>
              <div className="group relative -ml-2 rounded-md border-transparent bg-neutral-black focus-within:ring-2 focus-within:ring-white">
                <select
                  id="desktop-currency"
                  name="currency"
                  className="flex items-center rounded-md border-transparent bg-neutral-black bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                >
                  <option>USD</option>
                  <option>UAH</option>
                </select>
              </div>
            </div>
          </form>

          <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
            Get free delivery on orders over $100
          </p>

          {!isAuthenticated ? (
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <Link
                href="/signup"
                className="text-sm font-medium text-white hover:text-primary-hover"
              >
                Create an account
              </Link>
              <span className="h-6 w-px bg-gray-600" aria-hidden="true"></span>
              <Link
                href="/signin"
                className="text-sm font-medium text-white hover:text-primary-hover"
              >
                Sign in
              </Link>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
