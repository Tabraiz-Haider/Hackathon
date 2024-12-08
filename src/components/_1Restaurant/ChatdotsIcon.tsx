import { memo, SVGProps } from 'react';

const ChatdotsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.04308 15.7716L3.52721 17.8866C3.43611 17.9631 3.32503 18.0121 3.20704 18.0277C3.08905 18.0434 2.96905 18.025 2.86116 17.9747C2.75327 17.9245 2.66197 17.8444 2.59799 17.7441C2.53402 17.6437 2.50004 17.5272 2.50004 17.4081V5.00004C2.50004 4.83428 2.56589 4.67531 2.6831 4.5581C2.80031 4.44089 2.95928 4.37504 3.12504 4.37504H16.875C17.0408 4.37504 17.1998 4.44089 17.317 4.5581C17.4342 4.67531 17.5 4.83428 17.5 5.00004V15C17.5 15.1658 17.4342 15.3248 17.317 15.442C17.1998 15.5592 17.0408 15.625 16.875 15.625H6.44525C6.29812 15.625 6.1557 15.6769 6.04308 15.7716Z'
      stroke='#FF9F0D'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z'
      fill='#FF9F0D'
    />
    <path
      d='M6.25 10.9375C6.76777 10.9375 7.1875 10.5178 7.1875 10C7.1875 9.48223 6.76777 9.0625 6.25 9.0625C5.73223 9.0625 5.3125 9.48223 5.3125 10C5.3125 10.5178 5.73223 10.9375 6.25 10.9375Z'
      fill='#FF9F0D'
    />
    <path
      d='M13.75 10.9375C14.2678 10.9375 14.6875 10.5178 14.6875 10C14.6875 9.48223 14.2678 9.0625 13.75 9.0625C13.2322 9.0625 12.8125 9.48223 12.8125 10C12.8125 10.5178 13.2322 10.9375 13.75 10.9375Z'
      fill='#FF9F0D'
    />
  </svg>
);

const Memo = memo(ChatdotsIcon);
export { Memo as ChatdotsIcon };
