import React from 'react';

type PropsWithAs<As extends React.ElementType> =
  As extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[As]
    : As extends React.ComponentType<infer P>
    ? P
    : { as?: never } & React.HTMLProps<HTMLSpanElement>;

export type AsProp<As extends React.ElementType> = {
  as?: As;
} & PropsWithAs<As>;
