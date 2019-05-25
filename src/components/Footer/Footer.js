import React from 'react';
import classes from './Footer.css';
import ReactSVG from 'react-svg';
import { NavLink } from 'react-router-dom';

import background from '../../assets/img/footer.jpeg';

import facebook from '../../assets/icon/SVG/facebook.svg';
import instagram from '../../assets/icon/SVG/instagram.svg';
import twitter from '../../assets/icon/SVG/twitter.svg';

import location from '../../assets/icon/SVG/location.svg';
import mail from '../../assets/icon/SVG/mail2.svg';
import phone from '../../assets/icon/SVG/phone.svg';

const footer = ()=>  {
  return (
    <div className={classes.Footer}
    style={{backgroundImage: "linear-gradient(rgba(5, 2, 20, 0.99),rgba(5, 2, 20, 0.95)), url(" + background + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"}}>
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
              <div className={classes.Title}>
                  Menu
              </div>
            </div>
            <ul className={classes.MenuList}>
                <NavLink to='/' className={classes.MenuItem}>
                    Tech Market
                </NavLink>
                <NavLink to='/store/headphones' className={classes.MenuItem}>
                    Headphones
                </NavLink>
                <NavLink to='/store/computers' className={classes.MenuItem}>
                    Computers
                </NavLink>
                <NavLink to='/store/tv' className={classes.MenuItem}>
                    TV
                </NavLink>
                <NavLink to='/store/smartphones' className={classes.MenuItem}>
                    Smartphones
                </NavLink>
            </ul>
      </div>

      <div className={classes.FooterItem}>
          <div className={classes.TitleContainer}>
              <div className={classes.Title}>
                  Help
              </div>
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
              <div className={classes.Title}>
                  Have a questions?
              </div>
          </div>
          <div className={classes.QuestionList}>

            <div className={classes.QuestionItem}>
                  <ReactSVG src={location} alt="Icon" className={classes.QuestionIcon}/>
                  <div>
                    999 Fake Street, QC, Canada
                  </div>  
            </div>
            <div className={classes.QuestionItem}>
            <ReactSVG src={mail} alt="Icon" className={classes.QuestionIcon}/>
                  <div>
                    +1 514 1234 123
                  </div>  
            </div>
            <div className={classes.QuestionItem}>
            <ReactSVG src={phone} alt="Icon" className={classes.QuestionIcon}/>
                  <div>
                    techmarket@yourmail.test
                  </div>  
            </div>
            
                  
          </div>
      </div>


    </div>
  )
}

export default footer
