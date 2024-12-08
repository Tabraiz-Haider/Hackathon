import { memo, SVGProps } from 'react';

const ThumbsupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.99945 9.75H7.49945V19.5H2.99945C2.80054 19.5 2.60977 19.421 2.46912 19.2803C2.32847 19.1397 2.24945 18.9489 2.24945 18.75V10.5C2.24945 10.3011 2.32847 10.1103 2.46912 9.96967C2.60977 9.82902 2.80054 9.75 2.99945 9.75V9.75Z'
      stroke='#1F242E'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.49945 9.75L11.2495 2.25C11.6434 2.25 12.0335 2.3276 12.3975 2.47836C12.7615 2.62913 13.0922 2.8501 13.3708 3.12868C13.6493 3.40726 13.8703 3.73797 14.0211 4.10195C14.1719 4.46593 14.2495 4.85603 14.2495 5.25V7.5H20.0503C20.263 7.5 20.4732 7.54523 20.6671 7.63269C20.861 7.72016 21.034 7.84785 21.1748 8.0073C21.3156 8.16675 21.4208 8.35431 21.4835 8.55753C21.5463 8.76076 21.5651 8.975 21.5387 9.18605L20.4137 18.1861C20.3683 18.5488 20.1921 18.8826 19.918 19.1245C19.6439 19.3665 19.2909 19.5 18.9253 19.5H7.49945'
      stroke='#1F242E'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ThumbsupIcon);
export { Memo as ThumbsupIcon };
