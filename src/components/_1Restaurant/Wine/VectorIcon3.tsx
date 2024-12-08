import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.5 0.25H27.5L33.2094 19.5656C33.5613 20.7756 33.4681 22.0715 32.9469 23.2187C31.5604 26.2864 29.3185 28.8891 26.49 30.7147C23.6615 32.5403 20.3665 33.5113 17 33.5113C13.6335 33.5113 10.3385 32.5403 7.51001 30.7147C4.68152 28.8891 2.43962 26.2864 1.05312 23.2187C0.531852 22.0715 0.438729 20.7756 0.790625 19.5656L6.5 0.25Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
