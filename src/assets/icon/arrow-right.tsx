import { IconProps } from '@mui/material';

function ArrowRightIcon({ color }: IconProps) {
  return (
    <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_178_4277)'>
        <path
          d='M11.25 7.5L18.75 15L11.25 22.5'
          stroke={color ? color : '#18181B'}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_178_4277'>
          <rect width='30' height='30' fill='white' transform='matrix(-1 0 0 1 30 0)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowRightIcon;
