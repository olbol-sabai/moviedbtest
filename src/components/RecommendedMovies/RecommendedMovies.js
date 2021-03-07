import React from 'react';
import classes from './RecommendedMovies.module.scss';
import FilmThumbnail from '../FilmGrid/FilmThumbnail/FilmThumbnail';

const RecommendedMovies = ({ movies }) => {

    const thumbnailStyle = { width: '110px' }

    const allMovies = movies.filter(m => m.poster_path).map(({ poster_path, original_title, id }, idx) => (
        <div key={idx}>
            <FilmThumbnail
                url={poster_path}
                style={thumbnailStyle}
                title={original_title}
                id={id} />
        </div>
    ))

    return (

        <>
            <h3>Recommended Movies</h3>
            <div className={classes.RecommendedMovies}>
                {allMovies}
            </div>
        </>
    )

}

export default RecommendedMovies;