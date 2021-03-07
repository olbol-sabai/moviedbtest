import React from 'react';
import classes from './LandingImage.module.scss';
import Button from '../UI/Button/Button';
import { useHistory } from 'react-router';
import Stars from 'react-stars-display';

const baseImageURL = 'https://image.tmdb.org/t/p/w500'

const LandingImage = ({ resultData }) => {

    const history = useHistory()

    const filmDetailHandler = () => {
        history.push({
            pathname: `/detail/${resultData.id}`,
        })
    }

    return (
        <div className={classes.LandingImageContainer}>
            {(resultData.backdrop_path || resultData.poster_path) && (
                <img
                className={classes.LandingImage}
                src={resultData.backdrop_path ? baseImageURL + resultData.backdrop_path : baseImageURL + resultData.poster_path}
                alt="Landing" />)}
            {history.location.pathname === '/home' && (
                <div className={classes.FilmData}>
                    <div className={classes.FilmTitle}>{resultData.original_title}</div>
                    <h6 className={classes.Date}>{resultData.release_date.split("-")[0]}</h6>
                    <div className={classes.Stars}>
                        <Stars stars={resultData.vote_average / 2} fill='goldenrod' />
                        <Button
                            onClick={filmDetailHandler}
                            text="Go To Film"
                        />
                    </div>
                </div>
            )}

        </div>
    )

}

export default LandingImage;