import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { _1Restaurant } from './components/_1Restaurant/_1Restaurant';
import resets from './components/_resets.module.css';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <_1Restaurant />
    </div>
  );
});
