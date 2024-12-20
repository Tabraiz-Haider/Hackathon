import { memo, SVGProps } from 'react';

const DotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 86 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={29.5} cy={8} rx={7.5} ry={8} fill='#FF9F0D' fillOpacity={0.3} />
    <ellipse cx={7.5} cy={8} rx={7.5} ry={8} fill='#FF9F0D' />
    <circle cx={56} cy={8} r={8} fill='#FF9F0D' fillOpacity={0.3} />
    <ellipse cx={78.5} cy={8} rx={7.5} ry={8} fill='#FF9F0D' fillOpacity={0.3} />
  </svg>
);

const Memo = memo(DotIcon);
export { Memo as DotIcon };
