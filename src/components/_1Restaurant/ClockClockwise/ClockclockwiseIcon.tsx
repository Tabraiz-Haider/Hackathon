import { memo, SVGProps } from 'react';

const ClockclockwiseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 7.5V12' stroke='#1F242E' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.8971 14.25L12 12' stroke='#1F242E' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M17.2656 9.34838H21.0156V5.59838'
      stroke='#1F242E'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.8336 17.8336C16.6798 18.9874 15.2098 19.7732 13.6095 20.0915C12.0092 20.4098 10.3504 20.2464 8.84286 19.622C7.33537 18.9976 6.0469 17.9402 5.14038 16.5835C4.23385 15.2267 3.75 13.6317 3.75 12C3.75 10.3683 4.23385 8.77325 5.14038 7.41654C6.0469 6.05984 7.33537 5.00242 8.84286 4.37799C10.3504 3.75357 12.0092 3.59019 13.6095 3.90852C15.2098 4.22685 16.6798 5.01258 17.8336 6.16637L21.0156 9.34835'
      stroke='#1F242E'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ClockclockwiseIcon);
export { Memo as ClockclockwiseIcon };
