import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Avatar,
  Badge,
  Button,
  Container,
  Dropdown,
  DropdownItem,
  TextField,
  Typography,
} from '@cmusy/ui';
import { IconSearch, IconShopShoppingBag } from '@cmusy/icons';

import { NavbarTop } from '../navbar-top';

const Navbar = () => {
  const { push } = useRouter();
  const t = useTranslations('common');
  const isAuthenticated = false;
  return (
    <header>
      <NavbarTop />
      <nav className="border border-neutral-gray-lightest py-4">
        <Container>
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <Link href="/" className="mr-12 w-11 h-11">
                <Image
                  src="/cmusy-logo_for-white-background.svg"
                  height={44}
                  width={44}
                  alt="Header logo"
                />
              </Link>
              <TextField
                name="search"
                placeholder="Search"
                variant="filled"
                endAdornment={
                  <IconSearch className="h-5 w-5 text-neutral-gray" />
                }
              />
            </div>
            <div className="flex justify-end gap-x-6">
              <div className="flex  items-center">
                <Typography
                  as={Link}
                  href="/restaurants"
                  variant="nav-link"
                  className="mr-2"
                >
                  {t('navigation.links.restaurants')}
                </Typography>
                <Typography
                  as={Link}
                  href="/deals"
                  variant="nav-link"
                  className="mr-2"
                >
                  {t('navigation.links.deals')}
                </Typography>
                <Dropdown label="Components" variant="textual">
                  <DropdownItem>Typography</DropdownItem>
                  <DropdownItem>Colors</DropdownItem>
                  <DropdownItem>Textfields</DropdownItem>
                </Dropdown>
                {isAuthenticated ? (
                  <Typography
                    as={Link}
                    href="/account/orders"
                    variant="nav-link"
                    className="mr-2"
                  >
                    {t('navigation.my-orders')}
                  </Typography>
                ) : null}
              </div>
              <div className="flex items-center gap-x-4">
                <Button
                  variant="text"
                  color="primary"
                  className="relative bg-primary-light rounded-2xl p-4"
                  onClick={() => push('/cart')}
                >
                  <Badge variant="indicator">{5}</Badge>
                  <IconShopShoppingBag className="text-primary h-5 w-5" />
                </Button>

                {isAuthenticated ? (
                  <Link
                    href="/account/profile"
                    className="border-2 border-neutral-lightest-gray rounded-2xl"
                  >
                    <Avatar round="rounded" src="/avatar.jpg" alt="avatar" />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
