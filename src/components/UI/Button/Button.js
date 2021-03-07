import React from 'react';
import classes from './Button.module.scss';

const Button = ({ text, onClick }) => {

    return (
        <button
            className={classes.Button}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;