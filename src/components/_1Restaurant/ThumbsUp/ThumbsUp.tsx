import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ThumbsUp.module.css';
import { ThumbsupIcon } from './ThumbsupIcon';

interface Props {
  className?: string;
  classes?: {
    thumbsUp?: string;
    root?: string;
  };
  swap?: {
    thumbsUp?: ReactNode;
  };
}
/* @figmaId 82:2229 */
export const ThumbsUp: FC<Props> = memo(function ThumbsUp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.thumbsUp || ''} ${classes.thumbsUp}`}>
        {props.swap?.thumbsUp || <ThumbsupIcon className={classes.icon} />}
      </div>
    </div>
  );
});
