import React, { useState } from 'react';
import classes from './FilmThumbnail.module.scss';
import { motion } from 'framer-motion';
import Button from '../../UI/Button/Button';
import { useHistory } from 'react-router';

const baseImageURL = 'https://image.tmdb.org/t/p/w500'

const FilmThumbnail = ({ url, style, id, hideBtn }) => {

    const [hovering, setHovering] = useState(false)
    const history = useHistory()

    const clickHandler = () => {
        console.log(id)
        if (hovering) {
            history.push({
                pathname: `/detail/${id}`,
            })
            setTimeout(() => window.scrollTo(0, 0), 400);
        } else setHovering(s => !s)
    }
    return (
        <motion.div
            onHoverStart={() => setHovering(true)}
            onTap={clickHandler}
            onHoverEnd={() => setHovering(false)}
            style={style}
            className={classes.ThumbnailContainer}>
            <motion.img
                animate
                style={style}
                src={baseImageURL + url} />
            {hovering && !hideBtn &&
                <div className={classes.ThumbnailText} >
                    <Button text="Go To Film" />
                </div>
            }
        </motion.div>
    );
}

export default FilmThumbnail;