/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconSymbolYoutube: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <g clipPath="url(#clip0_517_25413)">
        <path
          d="M23.469 5.92901L23.4991 6.12501C23.209 5.09601 22.4261 4.30201 21.431 4.01301L21.41 4.00801C19.539 3.50001 12.0101 3.50001 12.0101 3.50001C12.0101 3.50001 4.50005 3.49001 2.61005 4.00801C1.59605 4.30201 0.81205 5.09601 0.52705 6.10401L0.52205 6.12501C-0.17695 9.77601 -0.18195 14.163 0.55305 18.072L0.52205 17.874C0.81205 18.903 1.59505 19.697 2.59005 19.986L2.61105 19.991C4.48005 20.5 12.0111 20.5 12.0111 20.5C12.0111 20.5 19.52 20.5 21.411 19.991C22.426 19.697 23.2101 18.903 23.4951 17.895L23.5 17.874C23.8181 16.176 24 14.222 24 12.226C24 12.153 24 12.079 23.9991 12.005C24 11.937 24 11.856 24 11.775C24 9.77801 23.8181 7.82401 23.469 5.92901ZM9.60805 15.651V8.35801L15.8741 12.01L9.60805 15.651Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_517_25413">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

IconSymbolYoutube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
