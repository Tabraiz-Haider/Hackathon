import { memo, SVGProps } from 'react';

const QuotesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.25 27H7.5C7.10218 27 6.72064 26.842 6.43934 26.5607C6.15804 26.2794 6 25.8978 6 25.5V13.5C6 13.1022 6.15804 12.7206 6.43934 12.4393C6.72064 12.158 7.10218 12 7.5 12H18.75C19.1478 12 19.5294 12.158 19.8107 12.4393C20.092 12.7206 20.25 13.1022 20.25 13.5V30C20.25 31.9891 19.4598 33.8968 18.0533 35.3033C16.6468 36.7098 14.7391 37.5 12.75 37.5'
      stroke='#FF9F0D'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M42 27H29.25C28.8522 27 28.4706 26.842 28.1893 26.5607C27.908 26.2794 27.75 25.8978 27.75 25.5V13.5C27.75 13.1022 27.908 12.7206 28.1893 12.4393C28.4706 12.158 28.8522 12 29.25 12H40.5C40.8978 12 41.2794 12.158 41.5607 12.4393C41.842 12.7206 42 13.1022 42 13.5V30C42 31.9891 41.2098 33.8968 39.8033 35.3033C38.3968 36.7098 36.4891 37.5 34.5 37.5'
      stroke='#FF9F0D'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(QuotesIcon);
export { Memo as QuotesIcon };
