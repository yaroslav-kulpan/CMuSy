"use client";
import { Card, CardContent } from '@cmusy/ui';

export function CartItemsLoading() {
  return (
    <Card>
      <CardContent>
        {Array.from({ length: 3 }, (_, idx) => idx + 1).map((cartItem) => (
          <div key={cartItem}>
            <div className="grid grid-cols-12 pt-4 pb-4 border-b border-neutral-lightest-gray last:border-none">
              <div className="flex items-center gap-x-3 col-span-7">
                <div>
                  <div className="h-20 w-20 bg-slate-200 rounded-2xl" />
                </div>
                <div className="flex flex-col">
                  <div className="mb-2 bg-slate-200 h-3 w-32 rounded" />
                  <div className="bg-slate-200 h-3 w-32 rounded" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-12 col-span-5">
                <div className="flex items-center gap-x-3">
                  <span className="inline-block h-5 w-5 bg-slate-200 rounded-lg" />
                  <span className="inline-block h-4 w-4 bg-slate-200 rounded" />
                  <span className="inline-block h-5 w-5 bg-slate-200 rounded-lg" />
                </div>
                <div className="flex items-center gap-x-5">
                  <span className="inline-block h-6 w-16 bg-slate-200 rounded-lg" />
                </div>
                <span className="inline-block h-4 w-4 bg-slate-200 rounded" />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
