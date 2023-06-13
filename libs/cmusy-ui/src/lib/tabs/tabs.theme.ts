import { tv } from 'tailwind-variants';

export const tabs = tv({
  variants: {
    fullWidth: {
      true: {},
    },
    activeTab: {
      true: {},
    },
    isDisabled: {
      true: {}
    }
  },
  slots: {
    root: 'flex p-1 gap-x-2 bg-neutral-gray-lightest rounded-2xl',
    tab: 'text-center text-neutral-gray-dark py-3.5 px-7 rounded-2xl',
  },
  compoundSlots: [
    {
      slots: ['tab'],
      fullWidth: true,
      class: 'flex-1',
    },
    {
      slots: ['tab'],
      activeTab: true,
      class: 'bg-neutral-black text-white',
    },
    {
      slots: ["tab"],
      isDisabled: true,
      class: 'text-neutral-gray-light',
    }
  ],
});


export const tab = tv({

})
