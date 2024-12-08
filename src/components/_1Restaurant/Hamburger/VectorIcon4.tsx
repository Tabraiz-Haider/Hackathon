import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H45.5' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
