import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.125 3.5L8.875 0L17.625 3.5L26.375 0L35.125 3.5L43.875 0'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
