import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M24 24L18.3335 18.3234L24 24ZM21.4737 10.7368C21.4737 13.5844 20.3425 16.3154 18.3289 18.3289C16.3154 20.3425 13.5844 21.4737 10.7368 21.4737C7.88925 21.4737 5.1583 20.3425 3.14475 18.3289C1.1312 16.3154 0 13.5844 0 10.7368C0 7.88925 1.1312 5.1583 3.14475 3.14475C5.1583 1.1312 7.88925 0 10.7368 0C13.5844 0 16.3154 1.1312 18.3289 3.14475C20.3425 5.1583 21.4737 7.88925 21.4737 10.7368V10.7368Z'
      stroke='white'
      strokeWidth={2.22941}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
