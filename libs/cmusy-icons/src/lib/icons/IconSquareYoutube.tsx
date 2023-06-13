/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconSquareYoutube: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <g clipPath="url(#clip0_517_25389)">
        <path
          d="M10.5054 14.2483L14.4088 12.0001L10.5054 9.75195V14.2483Z"
          fill={color}
        />
        <path
          d="M0 0V24H24V0H0ZM19.4982 12.0123C19.4982 12.0123 19.4982 14.4459 19.1895 15.6194C19.0164 16.2618 18.5099 16.7682 17.8676 16.9411C16.6941 17.25 12 17.25 12 17.25C12 17.25 7.31818 17.25 6.13239 16.9288C5.49005 16.756 4.98358 16.2493 4.81055 15.607C4.50165 14.4459 4.50165 12 4.50165 12C4.50165 12 4.50165 9.56653 4.81055 8.39301C4.9834 7.75067 5.50232 7.23175 6.13239 7.0589C7.30591 6.75 12 6.75 12 6.75C12 6.75 16.6941 6.75 17.8676 7.07117C18.5099 7.24402 19.0164 7.75067 19.1895 8.39301C19.5106 9.56653 19.4982 12.0123 19.4982 12.0123Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_517_25389">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

IconSquareYoutube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};