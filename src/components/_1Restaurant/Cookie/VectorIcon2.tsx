import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.125 5.25C4.57475 5.25 5.75 4.07475 5.75 2.625C5.75 1.17525 4.57475 0 3.125 0C1.67525 0 0.5 1.17525 0.5 2.625C0.5 4.07475 1.67525 5.25 3.125 5.25Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
