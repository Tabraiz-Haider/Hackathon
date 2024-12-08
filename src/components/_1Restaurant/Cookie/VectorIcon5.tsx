import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.75 5.75C4.19975 5.75 5.375 4.57475 5.375 3.125C5.375 1.67525 4.19975 0.5 2.75 0.5C1.30025 0.5 0.125 1.67525 0.125 3.125C0.125 4.57475 1.30025 5.75 2.75 5.75Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
