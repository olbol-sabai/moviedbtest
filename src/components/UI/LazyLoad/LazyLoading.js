import React from 'react';
import classes from './LazyLoading.module.scss';

const LazyLoading = () => {
    return (
        <div className={classes.LazyLoaderBackdrop}>
            <h1>Loading</h1>
        </div>
    );
}

export default LazyLoading;