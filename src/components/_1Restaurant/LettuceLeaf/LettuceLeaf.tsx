import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './LettuceLeaf.module.css';

interface Props {
  className?: string;
  classes?: {
    unsplashOFismyezPnY?: string;
    root?: string;
  };
  text?: {
    _125?: ReactNode;
    lettuceLeaf?: ReactNode;
  };
}
/* @figmaId 195:5570 */
export const LettuceLeaf: FC<Props> = memo(function LettuceLeaf(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.unsplashOFismyezPnY || ''} ${classes.unsplashOFismyezPnY}`}></div>
      {props.text?._125 != null ? props.text?._125 : <div className={classes._125}>12.5$</div>}
      {props.text?.lettuceLeaf != null ? (
        props.text?.lettuceLeaf
      ) : (
        <div className={classes.lettuceLeaf}>Lettuce Leaf</div>
      )}
      <div className={classes.lacusNisiEtAcDapibusVelitInCon}>Lacus nisi, et ac dapibus velit in consequat.</div>
    </div>
  );
});
