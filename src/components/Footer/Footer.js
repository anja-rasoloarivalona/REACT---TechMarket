import React from 'react';
import classes from './Footer.css';
import ReactSVG from 'react-svg';
import { NavLink } from 'react-router-dom';

import facebook from '../../assets/icon/SVG/facebook.svg';
import instagram from '../../assets/icon/SVG/instagram.svg';
import twitter from '../../assets/icon/SVG/twitter.svg';

import location from '../../assets/icon/SVG/location.svg';
import mail from '../../assets/icon/SVG/mail2.svg';
import phone from '../../assets/icon/SVG/phone.svg';

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
          <div className={classes.SocialMedia}>
              <ReactSVG src={facebook} alt="Icon" className={classes.Icon}/>
              <ReactSVG src={instagram} alt="Icon" className={classes.Icon}/>
              <ReactSVG src={twitter} alt="Icon" className={classes.Icon}/>
          </div>
      </div>

      <div className={classes.FooterItem}>
            <div className={classes.TitleContainer}>
                Menu
            </div>
            <ul className={classes.MenuList}>
                <NavLink to='/'>
                    Tech Market
                </NavLink>
                <NavLink to='/store/headphones'>
                    Headphones
                </NavLink>
                <NavLink to='/store/computers'>
                    Computers
                </NavLink>
                <NavLink to='/store/tv'>
                    TV
                </NavLink>
                <NavLink to='/store/smartphones'>
                    Smartphones
                </NavLink>
            </ul>
      </div>

      <div className={classes.FooterItem}>
          <div className={classes.TitleContainer}>
                Help
          </div>
          <div className={classes.HelpList}>
              <div className={classes.HelpItem}>Shipping information</div>
              <div className={classes.HelpItem}>Returns & Exchange</div>
              <div className={classes.HelpItem}>Terms & Conditions</div>
              <div className={classes.HelpItem}>Privacy Policy</div>
              <div className={classes.HelpItem}>FAQs</div>
              <div className={classes.HelpItem}>Contact</div>
          </div>
      </div>

      <div className={classes.FooterItem}>
          <div className={classes.TitleContainer}>
                Have a questions?
          </div>
          <div className={classes.QuestionList}>
            <div className={classes.QuestionItem}>
                  <ReactSVG src={location} alt="Icon" className={classes.QuestionIcon}/>
                  <ReactSVG src={mail} alt="Icon" className={classes.QuestionIcon}/>
                  <ReactSVG src={phone} alt="Icon" className={classes.QuestionIcon}/>
            </div>
          </div>
      </div>


    </div>
  )
}

export default footer
