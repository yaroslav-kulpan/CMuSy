import { ComponentPropsWithoutRef } from 'react';

type IPillProps = ComponentPropsWithoutRef<'button'>;

export function Pill({ children, ...props }: IPillProps) {
  return (
    <button
      className="border border-neutral-light-gray rounded-lg py-2 px-4 text-neutral-black
       text-sm leading-20 tracking-0.1 font-bold focus:outline-none focus:border-primary-dark hover:border-primary-hover hover:text-primary-hover disabled:border-neutral-lightest-gray disabled:text-neutral-lightest-gray transition duration-150"
      {...props}
    >
      {children}
    </button>
  );
}
