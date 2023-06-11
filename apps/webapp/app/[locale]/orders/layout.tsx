'use client';
import React from 'react';

import Navbar from '../../../src/shared/navbar/navbar';

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
