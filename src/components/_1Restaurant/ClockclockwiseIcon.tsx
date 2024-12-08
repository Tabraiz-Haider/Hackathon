import { memo, SVGProps } from 'react';

const ClockclockwiseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M20 12.5V20' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M26.4952 23.75L20 20' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M28.776 15.5806H35.026V9.33063'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M29.7227 29.7227C27.7998 31.6457 25.3497 32.9553 22.6825 33.4858C20.0153 34.0163 17.2506 33.744 14.7381 32.7033C12.2256 31.6626 10.0782 29.9003 8.56729 27.6391C7.05643 25.3779 6.25 22.7195 6.25 20C6.25 17.2805 7.05643 14.6221 8.56729 12.3609C10.0782 10.0997 12.2256 8.33736 14.7381 7.29665C17.2506 6.25595 20.0153 5.98365 22.6825 6.5142C25.3497 7.04475 27.7998 8.35431 29.7227 10.2773L35.026 15.5806'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ClockclockwiseIcon);
export { Memo as ClockclockwiseIcon };
