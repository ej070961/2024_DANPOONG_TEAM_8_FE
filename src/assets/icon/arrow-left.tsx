import { IconProps } from '../../@type/icon';

function ArrowLeftIcon({ color }: IconProps) {
  return (
    <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_294_6159)'>
        <path
          d='M18.75 7.5L11.25 15L18.75 22.5'
          stroke={color}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_294_6159'>
          <rect width='30' height='30' fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowLeftIcon;
