import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ChatDots.module.css';
import { ChatdotsIcon } from './ChatdotsIcon';

interface Props {
  className?: string;
  classes?: {
    chatDots?: string;
    root?: string;
  };
  swap?: {
    chatDots?: ReactNode;
  };
}
/* @figmaId 82:5332 */
export const ChatDots: FC<Props> = memo(function ChatDots(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.chatDots || ''} ${classes.chatDots}`}>
        {props.swap?.chatDots || <ChatdotsIcon className={classes.icon} />}
      </div>
    </div>
  );
});
