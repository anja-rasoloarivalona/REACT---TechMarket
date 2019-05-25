import React from 'react';
import classes from './Footer.css';

const footer = ()=>  {
  return (
    <div className={classes.Footer}>


      <div className={classes.FooterItem}>
          <div className={classes.TitleContainer}>
              <div className={classes.Title}>
                  <span>T</span>
                  <span>ech</span>
              </div>
              <div className={classes.Title}>
                  <span>M</span>
                  <span>arket</span>
              </div>
          </div>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          <div className={classes.SocialMedia}></div>
      </div>


    </div>
  )
}

export default footer
