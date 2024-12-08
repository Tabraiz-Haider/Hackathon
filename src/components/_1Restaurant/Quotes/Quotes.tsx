import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Quotes.module.css';
import { QuotesIcon } from './QuotesIcon';

interface Props {
  className?: string;
  classes?: {
    quotes?: string;
    root?: string;
  };
  swap?: {
    quotes?: ReactNode;
  };
}
/* @figmaId 82:2946 */
export const Quotes: FC<Props> = memo(function Quotes(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.quotes || ''} ${classes.quotes}`}>
        {props.swap?.quotes || <QuotesIcon className={classes.icon} />}
      </div>
    </div>
  );
});
