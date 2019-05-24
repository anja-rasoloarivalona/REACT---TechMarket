import React from 'react';

import background from '../../assets/img/beats.jpg';
import classes from './Home.css';
import Button from '../../components/Buttons/Button';

const home = () => {
    return (

        <React.Fragment>
            <div className={classes.Home}
                style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + background + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"}}>
                
                <div className={classes.HomeText}>
                    <div>NEW ARRIVALS</div>
                        <div>BEATS STUDIO</div>
                        <p>
                        Cum nos notissimus sane accitus consociatos quae foveis cum turmis nos agitabantur cerneret cogebatur has semper exhalaret foveis turmis occultis certamina bellicosus cum occultis emergentes sui subsidia sed nos abnuens.
                        </p>
                        <Button buttonValue='Discover'
                                path='/store/headphones'/>
                </div>
                    
        
            </div>
            <div className={classes.Latest}>
                <div className={classes.LatestTitle}>
                    Latest products
                </div>
            </div>
        </React.Fragment>
    )
}

export default home;
