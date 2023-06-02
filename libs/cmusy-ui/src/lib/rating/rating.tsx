import React from 'react';

import { useDomRef } from '../use-dom-ref/use-dom-ref';
import { IconStar } from './icon-star';
import { ratingStyles, starStyles, StarVariants } from './rating.theme';

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
  getLabelText?: (value: number) => string;
};

function createStars(totalStars: number): number[] {
  return Array.from({ length: totalStars }, (_, idx) => idx + 1);
}
export function Rating(props: RatingProps) {
  const {
    precision = 1,
    totalStars = 5,
    readOnly = false,
    value = 0,
    label = null,
    emptyIcon: EmptyIcon = IconStar,
    filledIcon: FilledIcon = IconStar,
    classNameFilledIcon,
    classNameEmptyIcon,
    onRatingChange,
    getLabelText,
    size,
    color,
  } = props;

  const [activeStar, setActiveStar] = React.useState(() => value ?? -1);
  const [hoverActiveStar, setHoverActiveStar] = React.useState(-1);
  const [isHovered, setIsHovered] = React.useState(false);
  const ratingContainerRef = useDomRef<HTMLDivElement>(null);
  const arrayOfStars = createStars(totalStars);

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
    const precisionString = `${precision}`;
    const decimalPlaces = precisionString.split('.')[1]?.length || 0;
    return Number(nearestNumber.toFixed(decimalPlaces));
  };

  function getRatingProps() {
    const defaultProps = {
      className: 'flex gap-1',
      ref: ratingContainerRef,
    };

    if (!readOnly) {
      Object.assign(defaultProps, {
        onMouseMove,
        onMouseLeave,
        onClick: handleClick,
      });
    }

    return defaultProps;
  }

  const {
    base,
    label: labelStyles,
    starButton,
  } = ratingStyles({ readOnly, size });

  const customLabel = label && getLabelText && getLabelText(activeStar);

  return (
    <div className={base()}>
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

          const style = {
            width: showRatingWithPrecision
              ? `${(activeState % 1) * 100}%`
              : '0%',
          };

          return (
            <div className="relative pointer" key={starValue}>
              <button
                type="button"
                key={index}
                disabled={readOnly}
                className={starButton()}
                style={style}
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
      {label && <small className={labelStyles()}>{customLabel || label}</small>}
    </div>
  );
}

export default React.memo(Rating);
