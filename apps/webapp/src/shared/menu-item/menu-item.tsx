import {
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from 'react';
import clsx from 'clsx';
import {Typography, useDomRef} from '@cmusy/ui';
import { mergeProps, useLink } from 'react-aria';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Variant = 'vertical' | 'horizontal';
type VariantsMap = { [variant in Variant]: string };

type MenuItemProps = ComponentPropsWithoutRef<'a'> & {
  variant?: Variant;
  icon?: ReactNode;
  label?: string;
  value?: string;
};

const variants: VariantsMap = {
  vertical:
    'flex-col justify-center items-center rounded-2xl gap-4 transition duration-150',
  horizontal: 'rounded-2xl gap-x-3 group transition duration-150',
};
// TODO: Replace to radio button realization
export const MenuItem = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<MenuItemProps>
>(function MenuItem(
  { children, variant = 'vertical', label, icon, className, ...props },
  ref
) {
  const linkRef = useDomRef(ref);
  const { linkProps } = useLink(props as any, linkRef);
  const currentRoute = usePathname();
  const isActive = currentRoute === props.href;

  return (
    <Link
      {...mergeProps(linkProps, props)}
      ref={linkRef}
      href={props.href as string}
      target={props.target}
      className={clsx(
        'w-full flex p-4 border border-neutral-lightest-gray bg-white hover:bg-primary-lightest hover:border-primary-hover focus:bg-primary-lightest focus:border-primary-hover',
        variants[variant],
         className,
        {
          'bg-primary-lightest ring-2 ring-primary': isActive,
        }
      )}
    >
      {variant === 'horizontal' && (
        <span
          className={clsx('p-2.5 h-10 w-10 rounded-xl', {
            'bg-neutral-gray-lightest text-neutral-gray group-hover:text-primary-hover group-focus:bg-primary-light':
              !isActive,
            'bg-primary text-white': isActive,
          })}
        >
          {icon}
        </span>
      )}
      {variant === 'horizontal' && (
        <div className="flex flex-col justify-between">
          <Typography
            variant="subtitle-1"
            className="text-left text-neutral-black"
          >
            {label}
          </Typography>
          <Typography variant="body-1" className="text-neutral-dark-gray">
            {children}
          </Typography>
        </div>
      )}
      {variant === 'vertical' && icon}
      {variant === 'vertical' && children}
    </Link>
  );
});
