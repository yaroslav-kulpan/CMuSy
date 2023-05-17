export const button = {
  base: 'inline-flex justify-center items-center tracking-0.3 font-bold transition duration-150 ease-in-out',
  size: {
    xs: 'py-1.5 px-3 text-button-1 font-bold leading-20 tracking-0.4 font-nunito',
    sm: 'py-3 px-4 text-sm font-bold leading-20 tracking-0.4 font-nunito',
    lg: 'py-4 px-8 text-lg font-bold leading-20 tracking-0.4 font-nunito',
  },
  variants: {
    text: {
      primary:
        'rounded-lg  text-primary hover:bg-primary-lightest focus:bg-primary-light',
      secondary:
        'rounded-lg text-neutral-gray hover:bg-neutral-background focus:bg-neutral-lightest-gray',
      light:
        'rounded-lg text-primary-hover hover:bg-primary-light focus:bg-primary-light',
      danger:
        'rounded-lg text-error hover:bg-error-lightest focus:bg-error-light',
      disabled:
        'rounded-lg rounded-lg text-neutral-lightest-gray cursor-default',
    },
    outlined: {
      primary:
        'rounded-lg border border-primary text-primary hover:bg-primary hover:text-white focus:bg-primary-dark focus:text-white',
      secondary:
        'rounded-lg border border-neutral-gray text-neutral-gray hover:bg-neutral-gray hover:text-white focus:bg-neutral-dark-gray focus:text-white',
      light:
        'rounded-lg border border-primary-hover text-primary-hover hover:bg-primary-hover hover:text-white focus:bg-primary-dark',
      danger:
        'rounded-lg border border-error text-error hover:bg-error hover:text-white focus:bg-error-dark focus:text-white',
      disabled:
        'rounded-lg border text-neutral-light-gray border-neutral-light-gray cursor-default pointer-events-none',
    },
    contained: {
      primary:
        'rounded-lg shadow-button bg-primary text-white hover:bg-primary-hover focus:bg-primary-dark focus:text-white',
      secondary:
        'rounded-lg shadow-button bg-neutral-gray text-white hover:bg-neutral-gray-light focus:bg-neutral-dark-gray focus:text-white',
      light:
        'rounded-lg shadow-button bg-primary-light text-primary hover:bg-primary-hover hover:text-white focus:bg-primary-dark focus:text-white',
      danger:
        'rounded-lg shadow-button bg-error text-white hover:bg-error-hover focus:bg-error-dark',
      disabled:
        'rounded-lg bg-neutral-background text-neutral-light-gray border-neutral-lightest-gray cursor-default pointer-events-none',
    },
    small: {
      primary:
        'rounded-full border border-primary text-primary hover:border-primary-hover hover:text-primary-hover focus:bg-primary-light',
      secondary:
        'rounded-full border border-neutral-light-gray text-neutral-gray hover:border-neutral-dark-gray hover:text-neutral-dark-gray focus:bg-primary-light',
      danger:
        'rounded-full border border-error text-error hover:border-error-hover hover:text-error-hover focus:bg-error-light',
      light:
        'rounded-full border border-primary-hover text-primary-hover hover:border-primary hover:text-primary focus:bg-primary-light',
      disabled:
        'rounded-full border border-neutral-lightest-gray text-neutral-lightest-gray cursor-default pointer-events-none',
    },
  },
};

export default button;
