import { memo, SVGProps } from 'react';

const CaretrightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M9 4.5L16.5 12L9 19.5' stroke='#757474' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(CaretrightIcon);
export { Memo as CaretrightIcon };
