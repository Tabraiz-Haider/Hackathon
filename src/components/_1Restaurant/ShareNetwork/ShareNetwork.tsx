import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ShareNetwork.module.css';
import { SharenetworkIcon } from './SharenetworkIcon';

interface Props {
  className?: string;
  classes?: {
    shareNetwork?: string;
    root?: string;
  };
  swap?: {
    shareNetwork?: ReactNode;
  };
}
/* @figmaId 82:2818 */
export const ShareNetwork: FC<Props> = memo(function ShareNetwork(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.shareNetwork || ''} ${classes.shareNetwork}`}>
        {props.swap?.shareNetwork || <SharenetworkIcon className={classes.icon} />}
      </div>
    </div>
  );
});
