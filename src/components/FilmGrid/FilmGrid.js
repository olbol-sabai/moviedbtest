import React from 'react';
import FilterMenu from './FilterMenu/FilterMenu';
import FilmThumbnail from './FilmThumbnail/FilmThumbnail';
import classes from './FilmGrid.module.scss';

const FilmGrid = React.memo(({ results, setSearchParams }) => {

    const thumbnailStyle = { width: '100%', maxWidth: '130px', justifySelf: 'center' }
    let thumbnails

    if (results) {
        thumbnails = results
            .filter(r => r.poster_path)
            .map(({ poster_path, original_title, id }, idx) => (
                <div key={idx} style={{ justifySelf: 'center' }}>
                    <FilmThumbnail
                        id={id}
                        url={poster_path}
                        title={original_title}
                        style={thumbnailStyle} />
                </div>
            ))
    }

    return (
        <div className={classes.FilmGridContainer}>
            <FilterMenu setSearchParams={setSearchParams} />
            {thumbnails}
        </div>
    );
})

export default FilmGrid;