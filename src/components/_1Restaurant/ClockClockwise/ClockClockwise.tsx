import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ClockClockwise.module.css';
import { ClockclockwiseIcon } from './ClockclockwiseIcon';

interface Props {
  className?: string;
  classes?: {
    clockClockwise?: string;
    root?: string;
  };
  swap?: {
    clockClockwise?: ReactNode;
  };
}
/* @figmaId 82:5168 */
export const ClockClockwise: FC<Props> = memo(function ClockClockwise(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.clockClockwise || ''} ${classes.clockClockwise}`}>
        {props.swap?.clockClockwise || <ClockclockwiseIcon className={classes.icon} />}
      </div>
    </div>
  );
});
