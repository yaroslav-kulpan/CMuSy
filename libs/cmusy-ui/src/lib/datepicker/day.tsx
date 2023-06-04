import classNames from 'clsx';
import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';

import {
  ComponentPropsWithoutRef,
  KeyboardEvent,
  MutableRefObject,
  useRef,
} from 'react';

dayjs.extend(weekOfYear);

interface IDay extends ComponentPropsWithoutRef<'div'> {
  label: string;
  value: Dayjs;
  focusedDate: Date;
  selected: Date | null;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  setFocusedDate: (date: Date) => void;
  handleSetSelectedDate: (date: Dayjs) => void;
}

export function Day({
  value,
  label,
  selected,
  focusedDate,
  setFocusedDate,
  containerRef,
  handleSetSelectedDate,
}: IDay) {
  const dayRef = useRef<HTMLDivElement>(null);
  const isToday = !selected && value.isSame(dayjs(new Date()));
  const isSelected = !isToday && dayjs(focusedDate).isSame(value);
  const otherDate = focusedDate.getMonth() !== value.month();

  const handleNextFocus = () => {
    setTimeout(() => {
      containerRef.current
        ?.querySelector<HTMLDivElement>('[aria-selected="true"]')
        ?.focus();
    }, 0);
  };

  const handleKeyDown = (evt: KeyboardEvent<HTMLDivElement>) => {
    const shiftKey = evt.shiftKey;
    const currentDay = dayjs(focusedDate);
    const currentWeek = currentDay.week();
    const currentMonth = currentDay.month();
    const currentYear = currentDay.year();

    if (
      evt.key === " " ||
      evt.key === "Enter"
    ) {
      handleSetSelectedDate(value);
    }

    if (evt.key === "ArrowUp") {
      const newWeek = currentDay.week(currentWeek - 1);
      handleNextFocus();
      setFocusedDate(newWeek.toDate());
    }

    if (evt.key === "ArrowDown") {
      const newWeek = currentDay.week(currentWeek + 1);
      handleNextFocus();
      setFocusedDate(newWeek.toDate());
    }

    if (evt.key === "ArrowLeft") {
      const newWeek = currentDay.set('day', currentDay.day() - 1);
      handleNextFocus();
      setFocusedDate(newWeek.toDate());
    }

    if (evt.key === "ArrowRight") {
      const newWeek = currentDay.set('day', currentDay.day() + 1);
      handleNextFocus();
      setFocusedDate(newWeek.toDate());
    }

    if (evt.key === "PageUp") {
      const newMonth = currentDay.month(currentMonth + 1);
      const nextYear = currentDay.year(currentYear + 1);
      shiftKey
        ? setFocusedDate(nextYear.toDate())
        : setFocusedDate(newMonth.toDate());
      handleNextFocus();
    }

    if (evt.key === "PageDown") {
      const newMonth = currentDay.month(currentMonth - 1);
      const nextYear = currentDay.year(currentYear - 1);
      shiftKey
        ? setFocusedDate(nextYear.toDate())
        : setFocusedDate(newMonth.toDate());
      handleNextFocus();
    }

    if (evt.key === "Home") {
      const day = currentDay.startOf('month');

      setFocusedDate(day.toDate());
      handleNextFocus();
    }

    if (evt.key === "End") {
      const day = currentDay.endOf('month');
      setFocusedDate(day.toDate());
      handleNextFocus();
    }
  };

  const handleClick = () => {
    handleSetSelectedDate(value);
    setFocusedDate(value.toDate());
  };

  return (
    <div
      tabIndex={dayjs(focusedDate).isSame(value) ? 0 : -1}
      data-date={value.toString()}
      ref={dayRef}
      data-year={value.format('YYYY')}
      data-month={value.format('mm')}
      aria-disabled="false"
      aria-current={isToday ? 'date' : undefined}
      aria-selected={isToday || dayjs(focusedDate).isSame(value)}
      role="option"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className={classNames(
        'datepicker__day flex justify-center items-center w-10 h-10 rounded-xl text-center leading-18 font-semibold text-subtitle2 text-neutral-dark-gray transition duration-100 cursor-pointer hover:font-semibold hover:text-neutral-black hover:bg-neutral-lightest-gray',
        {
          'bg-primary text-white': isToday,
          'bg-primary text-white datepicker__selected': isSelected,
          'font-semibold text-white': otherDate,
        }
      )}
    >
      {label}
    </div>
  );
}
