import { useEffect, useMemo, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { DatepickerNavigation } from './datepicker-navigation';
import { DayNames } from './day-names';
import { getGridDays } from './datepicker-utils';
import { DatepickerInput } from './datepicker-input';
import { Week } from './week';
import { Popover } from '@headlessui/react';

export interface IDatepicker {
  startDate?: Date | null;
  selected?: Date | null;
  onDateChange?: (date: Date) => void;
  handleMonthChange?: (date: Date) => void;
  formatWeekday?: (day: string, locale: string) => void;
  onCalendarOpen?: () => void;
  onCalendarClose?: () => void;
}

export function Datepicker({
  handleMonthChange,
  selected = null,
  onCalendarClose,
  onCalendarOpen,
  onDateChange,
}: IDatepicker) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState<Date | null>(selected);
  const [focusedDate, setFocusedDate] = useState<Date>(new Date());
  const [calendarInput, setCalendarInput] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const gridDays = useMemo(() => {
    return getGridDays(focusedDate);
  }, [focusedDate]);

  const prevMonth = () => {
    setFocusedDate((prev) => {
      const previousMonth = dayjs(prev)
        .set('month', prev.getMonth() - 1)
        .toDate();

      if (handleMonthChange) {
        handleMonthChange(previousMonth);
      }

      return previousMonth;
    });
  };

  const nextMonth = () => {
    setFocusedDate((prev) => {
      const nextMonth = dayjs(prev)
        .set('month', prev.getMonth() + 1)
        .toDate();

      if (handleMonthChange) {
        handleMonthChange(nextMonth);
      }

      return nextMonth;
    });
  };

  useEffect(() => {
    handleFocus();
  }, []);

  const handleFocus = () => {
    setTimeout(() => {
      containerRef.current
        ?.querySelector<HTMLDivElement>('[aria-selected="true"]')
        ?.focus();
    }, 0);
  };

  const handleOpenCalendar = () => {
    setCalendarOpen(true);
    handleFocus();
    if (onCalendarOpen) {
      onCalendarOpen();
    }
  };

  const handleCloseCalendar = () => {
    setCalendarOpen(false);

    if (onCalendarClose) {
      onCalendarClose();
    }
  };

  const handleSetSelectedDate = (date: Dayjs) => {
    setCurrentDate(date.toDate());
    setCalendarOpen(false);
    setCalendarInput(date.format('DD/MM/YYYY'));

    if (onDateChange) {
      onDateChange(date.toDate());
    }
  };

  const handleChange = (evt: any) => {
    setCalendarInput(evt.target.value);

    if (onDateChange) {
      onDateChange(evt.target.value);
    }
  };

  return (
    <Popover className="relative">
      <DatepickerInput
        value={calendarInput}
        handleChange={handleChange}
        handleOpenCalendar={handleOpenCalendar}
      />
      {calendarOpen && (
        <div className="absolute mt-2 w-80 px-4 py-5 bg-white border border-neutral-lightest-gray rounded-2xl shadow">
          <DatepickerNavigation
            date={focusedDate}
            nextMonth={nextMonth}
            prevMonth={prevMonth}
          />
          <DayNames />
          <Week
            handleSetSelectedDate={handleSetSelectedDate}
            gridDays={gridDays}
            focusedDate={focusedDate}
            selected={selected}
            containerRef={containerRef}
            setFocusedDate={setFocusedDate}
          />
        </div>
      )}
    </Popover>
  );
}
