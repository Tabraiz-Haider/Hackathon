import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Rectangle8787Icon } from './Rectangle8787Icon';
import { Rectangle8788Icon } from './Rectangle8788Icon';
import { Rectangle8789Icon } from './Rectangle8789Icon';
import { Rectangle8790Icon } from './Rectangle8790Icon';
import { Rectangle8791Icon } from './Rectangle8791Icon';
import classes from './SocialiIcon.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    rectangle8789?: ReactNode;
    rectangle8790?: ReactNode;
    rectangle8791?: ReactNode;
    rectangle8787?: ReactNode;
    rectangle8788?: ReactNode;
  };
  text?: {
    unnamed?: ReactNode;
    unnamed2?: ReactNode;
    unnamed3?: ReactNode;
    unnamed4?: ReactNode;
    unnamed5?: ReactNode;
  };
}
/* @figmaId 262:6469 */
export const SocialiIcon: FC<Props> = memo(function SocialiIcon(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle8789}>
        {props.swap?.rectangle8789 || <Rectangle8789Icon className={classes.icon} />}
      </div>
      <div className={classes.rectangle8790}>
        {props.swap?.rectangle8790 || <Rectangle8790Icon className={classes.icon2} />}
      </div>
      <div className={classes.rectangle8791}>
        {props.swap?.rectangle8791 || <Rectangle8791Icon className={classes.icon3} />}
      </div>
      {props.text?.unnamed != null ? props.text?.unnamed : <div className={classes.unnamed}></div>}
      {props.text?.unnamed2 != null ? props.text?.unnamed2 : <div className={classes.unnamed2}></div>}
      {props.text?.unnamed3 != null ? props.text?.unnamed3 : <div className={classes.unnamed3}></div>}
      <div className={classes.rectangle8787}>
        {props.swap?.rectangle8787 || <Rectangle8787Icon className={classes.icon4} />}
      </div>
      <div className={classes.rectangle8788}>
        {props.swap?.rectangle8788 || <Rectangle8788Icon className={classes.icon5} />}
      </div>
      {props.text?.unnamed4 != null ? props.text?.unnamed4 : <div className={classes.unnamed4}></div>}
      {props.text?.unnamed5 != null ? props.text?.unnamed5 : <div className={classes.unnamed5}></div>}
    </div>
  );
});
