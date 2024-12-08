import { memo, SVGProps } from 'react';

const Rectangle8784Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 163 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M159 0H4C1.79086 0 0 1.79086 0 4V52C0 54.2091 1.79086 56 4 56H159C161.209 56 163 54.2091 163 52V4C163 1.79086 161.209 0 159 0Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle8784Icon);
export { Memo as Rectangle8784Icon };
