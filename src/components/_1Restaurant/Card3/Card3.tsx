import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ChefCard1 } from '../ChefCard1/ChefCard1';
import classes from './Card3.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle8863?: string;
    root?: string;
  };
}
/* @figmaId 201:6109 */
export const Card3: FC<Props> = memo(function Card3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ChefCard1
        className={classes.chefCard1}
        classes={{ rectangle8863: `${props.classes?.rectangle8863 || ''} ${classes.rectangle8863}` }}
        text={{
          dEstwood: <div className={classes.dEstwood}>M. William</div>,
          chiefChef: <div className={classes.chiefChef}>Advertising Chef</div>,
        }}
      />
    </div>
  );
});
