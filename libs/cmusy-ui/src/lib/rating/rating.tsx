import { ReactNode, useRef, useState } from 'react';
// import { IconOutlineStar, IconStarBigFill } from '@starsup/icons';
import clsx from 'clsx';

type RatingProps = {
  value?: number;
  precision?: number;
  totalStars?: number;
  emptyIcon?: ReactNode;
  filledIcon?: ReactNode;
  className?: string;
  classNameFilledIcon?: string;
  classNameEmptyIcon?: string;
  readOnly?: boolean;
  label?: string;
  onRatingChange?: (rating: number) => void;
};

export function Rating({
  precision = 1,
  totalStars = 5,
  readOnly = false,
  value,
  label,
  className,
  classNameFilledIcon,
  classNameEmptyIcon,
  onRatingChange,
}: RatingProps) {
  const [activeStar, setActiveStar] = useState(() => value ?? -1);
  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef(null);
  const arrayOfStars = Array.from({ length: totalStars }, (_, idx) => idx + 1);

  const handleClick = (evt: any) => {
    setIsHovered(false);
    const calculatedRating = calculateRating(evt);
    setActiveStar(calculatedRating);
    if (onRatingChange) {
      onRatingChange(calculateRating(evt));
    }
  };

  //Event listener for mouse move and leave
  const handleMouseMove = (e: any) => {
    setIsHovered(true);
    setHoverActiveStar(calculateRating(e)); // We already calculation in this function
  };
  const handleMouseLeave = () => {
    setHoverActiveStar(-1); // Reset to default state
    setIsHovered(false);
  };

  const calculateRating = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { width, left } =
      ratingContainerRef?.current?.getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    const numberInStars = percent * totalStars;
    const nearestNumber =
      Math.round((numberInStars + precision / 2) / precision) * precision;
    return Number(
      nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0)
    );
  };

  function getRatingProps() {
    if (readOnly) {
      return {
        className: clsx('grid grid-cols-5 gap-1', className),
        ref: ratingContainerRef,
      };
    }

    return {
      className: clsx('grid grid-cols-5 gap-1', className),
      ref: ratingContainerRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
    };
  }

  return (
    <div className="flex items-center gap-x-2">
      <div {...getRatingProps()}>
        {arrayOfStars.map((starValue, index) => {
          const activeState = isHovered ? hoverActiveStar : activeStar;
          /*
              we only need to render empty icon layout when active state
              is not set i.e -1  in our case or active state state is
              less than index i.e show only when its
              index is greater that active state
            */
          const showEmptyIcon = activeState === -1 || activeState < index + 1;

          const isActiveRating = activeState !== 1;
          const isRatingWithPrecision = activeState % 1 !== 0;
          const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
          const showRatingWithPrecision =
            isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

          return (
            <div className="relative pointer" key={starValue}>
              <button
                type="button"
                key={index}
                disabled={readOnly}
                className={clsx({
                  'pointer-events-none': readOnly,
                })}
                style={{
                  width: showRatingWithPrecision
                    ? `${(activeState % 1) * 100}%`
                    : '0%',
                  overflow: 'hidden',
                  position: 'absolute',
                }}
              >
                <span
                  className={clsx(
                    'w-6 h-6 text-[#8BBDD1] cover-fill',
                    classNameFilledIcon
                  )}
                />
              </button>
              {!showEmptyIcon ? (
                <span
                  className={clsx(
                    'w-6 h-6 text-[#8BBDD1] cover-fill',
                    classNameFilledIcon
                  )}
                />
              ) : (
                <span
                  className={clsx('w-6 h-6 text-[#7EB7C0]', classNameEmptyIcon)}
                />
              )}
            </div>
          );
        })}
      </div>
      {label && <small>{label}</small>}
    </div>
  );
}
