import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ChatDots } from '../ChatDots/ChatDots';
import { ShareNetwork } from '../ShareNetwork/ShareNetwork';
import { ThumbsUp } from '../ThumbsUp/ThumbsUp';
import classes from './BlogCard1.module.css';
import { ChatdotsIcon } from './ChatdotsIcon';
import { SharenetworkIcon } from './SharenetworkIcon';
import { ThumbsupIcon } from './ThumbsupIcon';

interface Props {
  className?: string;
  classes?: {
    unsplashDphM2U1xq0U?: string;
    root?: string;
  };
  swap?: {
    chatDots?: ReactNode;
  };
  text?: {
    _10February2022?: ReactNode;
    pellentesqueNonEfficiturMiAliq?: ReactNode;
  };
}
/* @figmaId 201:5933 */
export const BlogCard1: FC<Props> = memo(function BlogCard1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.container}></div>
      <div className={classes.learnMore}>Learn More</div>
      {props.text?.pellentesqueNonEfficiturMiAliq != null ? (
        props.text?.pellentesqueNonEfficiturMiAliq
      ) : (
        <div className={classes.pellentesqueNonEfficiturMiAliq}>
          Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
        </div>
      )}
      {props.text?._10February2022 != null ? (
        props.text?._10February2022
      ) : (
        <div className={classes._10February2022}>10 February 2022 </div>
      )}
      <div className={`${props.classes?.unsplashDphM2U1xq0U || ''} ${classes.unsplashDphM2U1xq0U}`}></div>
      <ChatDots
        className={classes.chatDots2}
        classes={{ chatDots: classes.chatDots }}
        swap={{
          chatDots: props.swap?.chatDots || (
            <div className={classes.chatDots}>
              <ChatdotsIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <ShareNetwork
        className={classes.shareNetwork2}
        classes={{ shareNetwork: classes.shareNetwork }}
        swap={{
          shareNetwork: (
            <div className={classes.shareNetwork}>
              <SharenetworkIcon className={classes.icon2} />
            </div>
          ),
        }}
      />
      <ThumbsUp
        className={classes.thumbsUp2}
        classes={{ thumbsUp: classes.thumbsUp }}
        swap={{
          thumbsUp: (
            <div className={classes.thumbsUp}>
              <ThumbsupIcon className={classes.icon3} />
            </div>
          ),
        }}
      />
    </div>
  );
});
