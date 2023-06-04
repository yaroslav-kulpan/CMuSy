import dayjs from 'dayjs';
import { memo } from 'react';

interface IDatepickerNavigationProps {
  date: Date;
  nextMonth: () => void;
  prevMonth: () => void;
}

export const DatepickerNavigation = memo(
  ({ prevMonth, nextMonth, date }: IDatepickerNavigationProps) => {
    return (
      <div className="mb-5 flex justify-between items-center">
        <button
          type="button"
          className="py-1.5 px-2.5"
          onClick={prevMonth}
          tabIndex={0}
          aria-label="Prev month"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 7L7 1"
              stroke="#C7C8D2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="leading-20 tracking-0.1 text-neutral-black text-center text-button-1 font-bold">
          {dayjs(date).locale('uk').format('MMMM YYYY')}
        </span>
        <button
          type="button"
          className="py-1.5 px-2.5"
          onClick={nextMonth}
          tabIndex={0}
          aria-label="Next month"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="#C7C8D2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      dayjs(prevProps.date).format('MMMM-YYYY') ===
      dayjs(nextProps.date).format('MMMM-YYYY')
    );
  }
);
