// import { PropsWithChildren, useEffect, useRef } from 'react';
// import clsx from 'clsx';
// import { AnimatePresence, motion } from 'framer-motion';
// import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
//
// import useEvent from '../hooks/use-event';
// import { ClickAwayListener } from '../click-away-listener';
// import { EKeyboardEvents } from '../keyboard-events';
// import ReactFocusLock from 'react-focus-lock';
// import { Portal } from 'react-portal';
//
// interface IModalProps {
//   open: boolean;
//   onHandleClose: () => void;
//   disableKeyboard?: boolean;
//   backdropClassName?: string;
//   centered?: boolean;
// }
//
// export function Modal({
//                         children,
//                         open = false,
//                         disableKeyboard = false,
//                         backdropClassName = '',
//                         onHandleClose,
//                         centered = false,
//                       }: PropsWithChildren<IModalProps>) {
//   const containerRef = useRef<HTMLDivElement>(null);
//
//   const handleEscapeKey = useEvent((event: KeyboardEvent) => {
//     if (event.key === EKeyboardEvents.Escape) {
//       return onHandleClose && onHandleClose();
//     }
//     return;
//   });
//
//   useEffect(() => {
//     if (containerRef.current) {
//       if (open) {
//         disableBodyScroll(containerRef.current);
//
//         if (!disableKeyboard) {
//           window.addEventListener('keydown', handleEscapeKey, { capture: true });
//         }
//       } else {
//         enableBodyScroll(containerRef.current);
//       }
//     }
//
//     return () => {
//       if (!disableKeyboard) {
//         window.removeEventListener('keydown', handleEscapeKey, { capture: true });
//       }
//       clearAllBodyScrollLocks();
//     };
//   }, [open, handleEscapeKey, disableKeyboard]);
//
//   return (
//     <Portal>
//       <AnimatePresence onExitComplete={() => null}>
//         {open ? (
//           <div className="fixed z-20 inset-0 overflow-y-auto" ref={containerRef}>
//             <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//               <motion.div className="fixed inset-0" aria-hidden="true">
//                 <div
//                   className={clsx('fixed inset-0 bg-neutral-black opacity-40', backdropClassName)}
//                 />
//               </motion.div>
//               {centered && (
//                 <span
//                   className="hidden sm:inline-block sm:align-middle sm:h-screen"
//                   aria-hidden="true"
//                 >
//                   &#8203;
//                 </span>
//               )}
//               <motion.div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-modal transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//                 <div role="dialog" aria-modal="true" aria-labelledby="modal-headline">
//                   <ClickAwayListener onClickAway={onHandleClose}>
//                     <ReactFocusLock returnFocus>{children}</ReactFocusLock>
//                   </ClickAwayListener>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         ) : null}
//       </AnimatePresence>
//     </Portal>
//   );
// }
