import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Quotes } from '../Quotes/Quotes';
import { DotIcon } from './DotIcon';
import { Ellipse6Icon } from './Ellipse6Icon';
import { QuotesIcon } from './QuotesIcon';
import { StarIcon } from './StarIcon';
import classes from './Testimonials.module.css';

interface Props {
  className?: string;
  classes?: {
    dot?: string;
    star?: string;
    quotes?: string;
    unsplashIoq6qEibtbU?: string;
    root?: string;
  };
  swap?: {
    dot?: ReactNode;
    ellipse6?: ReactNode;
    star?: ReactNode;
    quotes?: ReactNode;
  };
  text?: {
    whatOurClientAreSaying?: ReactNode;
  };
}
/* @figmaId 442:13531 */
export const Testimonials: FC<Props> = memo(function Testimonials(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.dot || ''} ${classes.dot}`}>
        {props.swap?.dot || <DotIcon className={classes.icon2} />}
      </div>
      {props.text?.whatOurClientAreSaying != null ? (
        props.text?.whatOurClientAreSaying
      ) : (
        <div className={classes.whatOurClientAreSaying}>What our client are saying</div>
      )}
      <div className={classes.rectangle8934}></div>
      <div className={classes.ellipse6}>{props.swap?.ellipse6 || <Ellipse6Icon className={classes.icon3} />}</div>
      <div className={`${props.classes?.star || ''} ${classes.star}`}>
        {props.swap?.star || <StarIcon className={classes.icon4} />}
      </div>
      <div className={classes.alaminHasan}>Alamin Hasan</div>
      <div className={classes.foodSpecialist}>Food Specialist</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
        fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
        mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </div>
      <Quotes
        className={classes.quotes2}
        classes={{ quotes: `${props.classes?.quotes || ''} ${classes.quotes}` }}
        swap={{
          quotes: props.swap?.quotes || (
            <div className={classes.quotes}>
              <QuotesIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={`${props.classes?.unsplashIoq6qEibtbU || ''} ${classes.unsplashIoq6qEibtbU}`}></div>
      <div className={classes.testimonials}>Testimonials</div>
    </div>
  );
});
