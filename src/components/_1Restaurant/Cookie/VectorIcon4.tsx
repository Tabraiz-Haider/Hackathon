import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.375 5.25C4.82475 5.25 6 4.07475 6 2.625C6 1.17525 4.82475 0 3.375 0C1.92525 0 0.75 1.17525 0.75 2.625C0.75 4.07475 1.92525 5.25 3.375 5.25Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
