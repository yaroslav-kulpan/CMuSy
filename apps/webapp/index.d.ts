/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

// Use type safe message keys with `next-intl`
type Messages = typeof import('./locales/en.json');
// @typescript-eslint/no-empty-interface
declare interface IntlMessages extends Messages {}
