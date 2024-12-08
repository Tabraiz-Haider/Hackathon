import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ChefCard1 } from '../ChefCard1/ChefCard1';
import classes from './Card2.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle8863?: string;
    chefCard1?: string;
    root?: string;
  };
}
/* @figmaId 201:6108 */
export const Card2: FC<Props> = memo(function Card2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ChefCard1
        className={`${props.classes?.chefCard1 || ''} ${classes.chefCard1}`}
        classes={{ rectangle8863: `${props.classes?.rectangle8863 || ''} ${classes.rectangle8863}` }}
        text={{
          dEstwood: <div className={classes.dEstwood}>D.Scoriesh</div>,
          chiefChef: <div className={classes.chiefChef}>Assistant Chef</div>,
        }}
      />
    </div>
  );
});
