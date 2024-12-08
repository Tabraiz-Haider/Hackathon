import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Mail.module.css';
import { Rectangle8783Icon } from './Rectangle8783Icon';
import { Rectangle8784Icon } from './Rectangle8784Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    rectangle8783?: ReactNode;
  };
  text?: {
    subscribeNow?: ReactNode;
  };
}
/* @figmaId 262:6441 */
export const Mail: FC<Props> = memo(function Mail(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle8783}>
        {props.swap?.rectangle8783 || <Rectangle8783Icon className={classes.icon} />}
      </div>
      <div className={classes.rectangle8784}>
        <Rectangle8784Icon className={classes.icon2} />
      </div>
      {props.text?.subscribeNow != null ? (
        props.text?.subscribeNow
      ) : (
        <div className={classes.subscribeNow}>Subscribe Now</div>
      )}
      <div className={classes.enterYourEmail}> Enter Your Email</div>
    </div>
  );
});
