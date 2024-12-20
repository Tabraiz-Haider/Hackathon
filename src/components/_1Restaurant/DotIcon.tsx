import { memo, SVGProps } from 'react';

const DotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 87 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={30.1064} cy={8.81778} rx={7.49542} ry={7.99802} fill='#FF9F0D' fillOpacity={0.3} />
    <ellipse cx={8.11981} cy={8.81778} rx={7.49542} ry={7.99802} fill='#FF9F0D' />
    <ellipse cx={56.5902} cy={8.81778} rx={7.99512} ry={7.99802} fill='#FF9F0D' fillOpacity={0.3} />
    <ellipse cx={79.0764} cy={8.81778} rx={7.49545} ry={7.99802} fill='#FF9F0D' fillOpacity={0.3} />
  </svg>
);

const Memo = memo(DotIcon);
export { Memo as DotIcon };
