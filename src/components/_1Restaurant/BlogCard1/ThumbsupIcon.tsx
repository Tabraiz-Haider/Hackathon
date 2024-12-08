import { memo, SVGProps } from 'react';

const ThumbsupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.49954 8.125H6.24954V16.25H2.49954C2.33378 16.25 2.17481 16.1842 2.0576 16.0669C1.94039 15.9497 1.87454 15.7908 1.87454 15.625V8.75C1.87454 8.58424 1.94039 8.42527 2.0576 8.30806C2.17481 8.19085 2.33378 8.125 2.49954 8.125V8.125Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.24954 8.125L9.37454 1.875C9.70285 1.875 10.0279 1.93966 10.3313 2.0653C10.6346 2.19094 10.9102 2.37509 11.1423 2.60723C11.3745 2.83938 11.5586 3.11498 11.6842 3.41829C11.8099 3.72161 11.8745 4.0467 11.8745 4.375V6.25H16.7086C16.8858 6.25 17.061 6.28769 17.2226 6.36058C17.3841 6.43346 17.5284 6.53987 17.6457 6.67275C17.763 6.80562 17.8507 6.96192 17.9029 7.13128C17.9552 7.30063 17.9709 7.47917 17.9489 7.65504L17.0114 15.155C16.9736 15.4574 16.8267 15.7355 16.5983 15.9371C16.3699 16.1387 16.0757 16.25 15.7711 16.25H6.24954'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ThumbsupIcon);
export { Memo as ThumbsupIcon };
