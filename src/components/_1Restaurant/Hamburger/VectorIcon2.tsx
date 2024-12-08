import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M35.5 0.75V4.25C35.5 6.10652 34.7625 7.88699 33.4497 9.19975C32.137 10.5125 30.3565 11.25 28.5 11.25H7.5C5.64348 11.25 3.86301 10.5125 2.55025 9.19975C1.2375 7.88699 0.5 6.10652 0.5 4.25V0.75'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
