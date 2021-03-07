import React from 'react';
import classes from './MenuCircle.module.scss';
import { motion } from 'framer-motion';


const MenuCircle = ({ open }) => {

    const animateVariants = {
        open: { x: 0, y: 0 },
        closed: { x: 80, y: -80, transition: { delay: 0.3 } },
    }


    return (
        <>
            <motion.div
                transition={{ duration: 0.3 }}
                animate={open ? "open" : "closed"}
                variants={animateVariants}
                className={classes.MenuCircle}></motion.div >
        </>
    )
}

export default MenuCircle;