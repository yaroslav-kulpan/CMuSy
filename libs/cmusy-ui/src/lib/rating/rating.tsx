import React, { useState } from 'react';
// import { IconOutlineStar, IconStarBigFill } from '@starsup/icons';
import clsx from 'clsx';
import { useDomRef } from '../use-dom-ref/use-dom-ref';
import { IconStar } from './icon-star';
import { starStyles, StarVariants } from './rating.theme';

type RatingProps = StarVariants & {
  value?: number;
  precision?: number;
  totalStars?: number;
  emptyIcon?: React.FC<React.SVGAttributes<SVGElement>>;
  filledIcon?: React.FC<React.SVGAttributes<SVGElement>>;
  className?: string;
  classNameFilledIcon?: string;
  classNameEmptyIcon?: string;
  readOnly?: boolean;
  label?: string;
  onRatingChange?: (rating: number) => void;
};

export function Rating(props: RatingProps) {
  const {
    precision = 1,
    totalStars = 5,
    readOnly = false,
    value,
    label,
    emptyIcon: EmptyIcon = IconStar,
    filledIcon: FilledIcon = IconStar,
    className,
    classNameFilledIcon,
    classNameEmptyIcon,
    onRatingChange,
    size,
    color,
  } = props;

  const [activeStar, setActiveStar] = useState(() => value ?? -1);
  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useDomRef<HTMLDivElement>(null);
  const arrayOfStars = Array.from({ length: totalStars }, (_, idx) => idx + 1);

  const handleClick = (evt: React.MouseEvent) => {
    setIsHovered(false);
    const calculatedRating = calculateRating(evt);
    setActiveStar(calculatedRating);
    if (onRatingChange) {
      onRatingChange(calculateRating(evt));
    }
  };

  //Event listener for mouse move and leave
  const onMouseMove = (evt: React.MouseEvent) => {
    setIsHovered(true);
    setHoverActiveStar(calculateRating(evt)); // We already calculation in this function
  };
  const onMouseLeave = () => {
    setHoverActiveStar(-1); // Reset to default state
    setIsHovered(false);
  };

  const calculateRating = (evt: React.MouseEvent) => {
    const { left, width } =
      ratingContainerRef.current?.getBoundingClientRect() || {
        width: 1,
        left: 0,
      };
    const percent = (evt.clientX - left) / width;
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
      onMouseMove,
      onMouseLeave,
      onClick: handleClick,
    };
  }
  // const { starIcon } = ratingStyles({});

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
                <IconStar
                  className={starStyles({
                    color,
                    size,
                    className: classNameFilledIcon,
                  })}
                />
              </button>

              {showEmptyIcon ? (
                <EmptyIcon
                  className={starStyles({
                    color,
                    size,
                    showEmptyIcon,
                    className: classNameEmptyIcon,
                  })}
                />
              ) : (
                <FilledIcon
                  className={starStyles({
                    color,
                    size,
                    showEmptyIcon,
                    className: classNameFilledIcon,
                  })}
                />
              )}
            </div>
          );
        })}
      </div>
      {label && <small className="text-neutral-gray">{label}</small>}
    </div>
  );
}
