import React from 'react';
import classes from './Credits.module.scss';
import CreditsThumbnail from './CreditsThumbnail/CreditsThumbnail';


const Credits = React.memo(({ list, title }) => {


    const filteredList = list.filter(i => i.profile_path)

    // style={{ gridTemplateColumns: `repeat(${filteredList.length}, 100px)` }}
    return (
        filteredList.length > 0 ? (
            <div
                className={classes.ListContainer}>
                <h1 className={classes.Title}>{title}</h1>
                {filteredList.map(({ profile_path, name }, idx) => (
                    <React.Fragment key={idx}>
                        <CreditsThumbnail src={profile_path} name={name} />
                    </React.Fragment>
                ))
                }
            </div >
        ) : null
    );
})

export default Credits;