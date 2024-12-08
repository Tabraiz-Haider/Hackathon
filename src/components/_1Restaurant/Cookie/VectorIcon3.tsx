import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.125 5.5C4.57475 5.5 5.75 4.32475 5.75 2.875C5.75 1.42525 4.57475 0.25 3.125 0.25C1.67525 0.25 0.5 1.42525 0.5 2.875C0.5 4.32475 1.67525 5.5 3.125 5.5Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
