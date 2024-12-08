import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ChefCard1.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle8863?: string;
    root?: string;
  };
  text?: {
    dEstwood?: ReactNode;
    chiefChef?: ReactNode;
  };
}
/* @figmaId 198:5591 */
export const ChefCard1: FC<Props> = memo(function ChefCard1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle8863 || ''} ${classes.rectangle8863}`}></div>
      <div className={classes.rectangle8867}></div>
      {props.text?.dEstwood != null ? props.text?.dEstwood : <div className={classes.dEstwood}>D.Estwood</div>}
      {props.text?.chiefChef != null ? props.text?.chiefChef : <div className={classes.chiefChef}>Chief Chef</div>}
    </div>
  );
});
