import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.578125 1.94062C2.89688 0.693749 8.27813 -1.1 16 2.75C24.225 6.8625 29.8031 4.54375 31.8375 3.34062'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
