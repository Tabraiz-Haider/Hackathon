import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ChefCard1 } from '../ChefCard1/ChefCard1';
import classes from './ChefCard.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle8863?: string;
    root?: string;
  };
}
/* @figmaId 201:6103 */
export const ChefCard: FC<Props> = memo(function ChefCard(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ChefCard1
        className={classes.chefCard1}
        classes={{ rectangle8863: `${props.classes?.rectangle8863 || ''} ${classes.rectangle8863}` }}
      />
    </div>
  );
});
