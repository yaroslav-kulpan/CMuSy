import { memo } from 'react';

import LocaleData from 'dayjs/plugin/localeData';
import dayjs from 'dayjs';

dayjs.extend(LocaleData);

export const DayNames = memo(() => {
  const dayNames = dayjs().localeData().weekdays();
  return (
    <div className="grid grid-cols-7 text-xs leading-6 text-gray-500">
      {dayNames.map((day) => (
        <div
          key={day}
          aria-label={day}
          className="text-center uppercase text-neutral-gray text-small-3 leading-14 font-bold"
        >
          {day.slice(0, 3)}
        </div>
      ))}
    </div>
  );
});
