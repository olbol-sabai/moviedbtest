import React from 'react';
import classes from './MenuList.module.scss';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';



const MenuList = ({ open }) => {

    const menuChoices = [
        { readable: 'Popular', param: 'popular' },
        { readable: 'Top Rated', param: 'top_rated' },
        { readable: 'Upcoming', param: 'upcoming' },
    ]

    const variants = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    }

    const history = useHistory()

    const paramHandler = (param) => {
        history.push({ pathname: '/home', search: `?category=${param}` })
    }

    return (
        <>
            <motion.div
                animate={open ? "open" : "closed"}
                variants={variants}
                className={classes.ListContainer}>
                {menuChoices.map(({ readable, param }, idx) => (
                    <motion.h5
                        whileHover={{ scale: 1.05 }}
                        key={idx}
                        className={classes.MenuItem}
                        onClick={() => paramHandler(param)}>
                        {readable}
                    </motion.h5>
                ))}
            </motion.div>
        </>

    )
}

export default MenuList;