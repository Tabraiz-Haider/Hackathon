import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Play.module.css';
import { PlayIcon } from './PlayIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    play?: ReactNode;
  };
}
/* @figmaId 82:3096 */
export const Play: FC<Props> = memo(function Play(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.play}>{props.swap?.play || <PlayIcon className={classes.icon} />}</div>
    </div>
  );
});
