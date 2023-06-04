import { memo, MutableRefObject } from 'react';
import { Dayjs } from 'dayjs';

import { Day } from './day';

interface IWeek {
  gridDays: any[][];
  focusedDate: Date;
  setFocusedDate: (date: Date) => void;
  selected: Date | null;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  handleSetSelectedDate: (date: Dayjs) => void;
}

export const Week = memo(
  ({
     gridDays,
     selected,
     focusedDate,
     containerRef,
     handleSetSelectedDate,
     setFocusedDate,
   }: IWeek) => {
    return (
      <div className="mt-3.5 " role="listbox" ref={containerRef}>
        {gridDays.map((week, i) => (
          <div className="grid grid-cols-7 text-xs leading-6 text-gray-500" key={i + 1}>
            {week.map((day, i) =>
              day ? (
                <Day
                  key={day.value.toString()}
                  containerRef={containerRef}
                  focusedDate={focusedDate}
                  value={day.value}
                  label={day.text}
                  handleSetSelectedDate={handleSetSelectedDate}
                  selected={selected}
                  setFocusedDate={setFocusedDate}
                />
              ) : (
                <span key={i} className="h-5 w-5" />
              )
            )}
          </div>
        ))}
      </div>
    );
  }
);

export default Week;
