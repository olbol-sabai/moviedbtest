import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './FilterMenu.module.scss';


const FilterMenu = ({ setSearchParams }) => {

    const options = [
        { readable: 'Popular', param: 'popular' },
        { readable: 'Top Rated', param: 'top_rated' },
        { readable: 'Upcoming', param: 'upcoming' },
        { readable: 'Action', param: '' },
        { readable: 'Adventure', param: '' },
        { readable: 'Animation', param: '' },
        { readable: 'Bollywood', param: '' },
        { readable: 'Comedy', param: '' },
        { readable: 'Crime', param: '' },
        { readable: 'Documentary', param: '' },
        { readable: 'Drama', param: '' },
        { readable: 'Family', param: '' },
        { readable: 'Fantast', param: '' },
        { readable: 'Foreign', param: '' },
        { readable: 'All Movies', param: '' },
    ]

    const history = useHistory()

    const paramHandler = (param) => {
        setSearchParams(param)
        history.push({ search: `?category=${param}` })
    }

    return (
        <div className={classes.FilterContainer}>
            <h2 className={classes.FilterTitle}>Categories and Filters</h2>
            <div className={classes.OptionGrid}>
                {options.map(({ readable, param }, idx) => (
                    <p key={idx}
                        style={param ? { color: 'blue', cursor: 'pointer' } : null}
                        onClick={() => paramHandler(param)}
                        className={classes.FilterOption}
                    >{readable}</p>
                ))}
            </div>
        </div >
    );
}

export default FilterMenu;