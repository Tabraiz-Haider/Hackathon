import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.675 14C2.41393 13.9994 2.1563 13.9405 1.92098 13.8274C1.68565 13.7144 1.47861 13.5501 1.31501 13.3466C1.15141 13.1432 1.0354 12.9057 0.975488 12.6516C0.915574 12.3975 0.913272 12.1332 0.96875 11.8781C2.36875 5.14063 10.3531 0 20 0C29.6469 0 37.6312 5.14063 39.0312 11.8781C39.0867 12.1332 39.0844 12.3975 39.0245 12.6516C38.9646 12.9057 38.8486 13.1432 38.685 13.3466C38.5214 13.5501 38.3143 13.7144 38.079 13.8274C37.8437 13.9405 37.5861 13.9994 37.325 14H2.675Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
