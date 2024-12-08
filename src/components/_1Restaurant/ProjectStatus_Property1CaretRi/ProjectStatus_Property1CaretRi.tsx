import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { CaretrightIcon } from './CaretrightIcon';
import classes from './ProjectStatus_Property1CaretRi.module.css';

interface Props {
  className?: string;
  classes?: {
    caretRight?: string;
    root?: string;
  };
  swap?: {
    caretRight?: ReactNode;
  };
}
/* @figmaId 31:153 */
export const ProjectStatus_Property1CaretRi: FC<Props> = memo(function ProjectStatus_Property1CaretRi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.caretRight || ''} ${classes.caretRight}`}>
        {props.swap?.caretRight || <CaretrightIcon className={classes.icon} />}
      </div>
    </div>
  );
});
