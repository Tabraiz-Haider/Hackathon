import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Handbag.module.css';
import { HandbagIcon } from './HandbagIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    handbag?: ReactNode;
  };
}
/* @figmaId 82:4143 */
export const Handbag: FC<Props> = memo(function Handbag(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.handbag}>{props.swap?.handbag || <HandbagIcon className={classes.icon} />}</div>
    </div>
  );
});
