import React from 'react';

// * interfaces
interface SvgProps {
  width: number;
  height: number;
  color: string;
}

// * main function
export default function NotificationIcon(props: SvgProps) {
  const { width, height, color } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 237 204"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.708496 203.875H236.292L118.5 0.416504L0.708496 203.875ZM129.208 171.75H107.792V150.333H129.208V171.75ZM129.208 128.917H107.792V86.0832H129.208V128.917Z"
        fill={color}
      />
    </svg>
  );
}
