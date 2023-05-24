import { tv } from 'tailwind-variants';
import { ModalActions } from './modal-actions';

export const modalStyles = tv({
  base: 'relative z-10',
  slots: {
    modal: [
      'relative',
      'transform',
      'overflow-hidden',
      'rounded-lg',
      'bg-white',
      // 'px-4',
      // 'pb-4',
      // 'pt-5',
      'text-left',
      'shadow-modal',
      'transition-all',
      // 'sm:my-8',
      'sm:w-full',
      'sm:max-w-sm',
      // 'sm:p-6',
    ],
    modalWrapper: 'fixed inset-0 z-10 overflow-y-auto',
    modalContainer:
      'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0',
    overlay: 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity',
  },
});

export const modalContentStyles = tv({
  base: 'px-5 py-5',
});

export const modalTitleStyles = tv({
  base: 'px-5 py-5',
});

export const modalActionsStyles = tv({
  slots: {
    divider:
      'w-full flex justify-end items-center px-5 py-5 border-t border-neutral-lightest-gray',
    actionsWrapper: 'grid grid-cols-2 gap-x-4',
  },
});
