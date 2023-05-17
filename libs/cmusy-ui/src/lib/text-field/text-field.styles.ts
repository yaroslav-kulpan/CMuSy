const prefixClass = "cmusyui-input";

export const styles = {
  base: 'form-input rounded-lg min-h-11 w-full text-neutral-black placeholder:text-neutral-gray placeholder:focus:text-neutral-gray-light text-sm',
  variants: {
    outlined: {
      primary:
        'border-neutral-light-gray ring-1.5 ring-inset !ring-neutral-gray-light focus:ring-1.5 focus:ring-inset focus:ring-primary',
    },
    filled: {
      primary:
        'bg-neutral-gray-lightest border-neutral-light-gray ring-1.5 ring-inset !ring-neutral-gray-light focus:ring-1.5 focus:ring-inset focus:ring-primary',
      secondary:
        'rounded-lg text-neutral-gray hover:bg-neutral-background focus:bg-neutral-lightest-gray',
      light:
        'rounded-lg text-primary-hover hover:bg-primary-light focus:bg-primary-light',
    },
    disabled:
      'bg-neutral-background border-neutral-gray-lightest text-neutral-gray-light placeholder:text-neutral-gray-light',
  },
};
