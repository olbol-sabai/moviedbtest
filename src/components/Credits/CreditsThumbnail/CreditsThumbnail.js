import React from 'react';
import classes from './CreditsThumbnail.module.css';


const baseImageURL = 'https://image.tmdb.org/t/p/w500'

const CreditsThumbnail = ({ src, name }) => {


    return (
        <div className={classes.ThumbnailContainer}>
            <img className={classes.Image} src={baseImageURL + src} alt="cast/crew" />
            <p className={classes.Name}>{name}</p>
        </div>
    );
}

export default CreditsThumbnail;