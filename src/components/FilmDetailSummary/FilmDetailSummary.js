import React from 'react';
import classes from './FilmDetailSummary.module.scss';
import FilmThumbnail from '../FilmGrid/FilmThumbnail/FilmThumbnail';
import Stars from 'react-stars-display';

const FilmDetailSummary = ({ detailData }) => {

    let detail = null

    if (detailData) {
        detail = (
            <>
                <h1>{detailData.original_title}</h1>
                <div className={classes.Stats}>
                    <Stars
                        stars={detailData.vote_average / 2}
                        fill='goldenrod' />
                    <div>
                        <p >{detailData.vote_average.toFixed(1)}</p>
                        <p>{detailData.vote_count} votes</p>
                    </div>
                </div>
                <div className={classes.MiscStats}>
                    <h5 className={classes.MiscStatsItem}>{detailData.release_date.substring(0, 4)} |</h5>
                    <h5 className={classes.MiscStatsItem}>{Math.floor(detailData.runtime / 60)} hrs {detailData.runtime % 60} mins |</h5>
                    <h5 className={classes.MiscStatsItem}>{detailData.original_language} |</h5>
                    <div className={classes.Genre}>
                        {
                            detailData.genres.map(({ name }, idx) => (
                                <p className={classes.GenreItem} key={idx}>{name}</p>
                            ))
                        }
                    </div>
                </div>
                <div >
                    <p className={classes.Overview}>{detailData.overview}</p>
                </div>
            </>
        )
    }

    const thumbnailStyle = { width: '200px' }
    return (
        <div className={classes.FilmDetailSummary}>
            <FilmThumbnail
                url={detailData.poster_path}
                style={thumbnailStyle}
                hideBtn={true} />
            <div className={classes.FilmDetailText}>
                {detail}
            </div>
        </div>
    )

}

export default FilmDetailSummary;