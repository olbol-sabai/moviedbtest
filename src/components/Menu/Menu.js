import React, { useState } from 'react';
import MenuButton from './MenuButton/MenuButton';
import MenuCircle from './MenuCircle/MenuCircle';
import MenuList from './MenuList/MenuList';
import classes from './Menu.module.scss';

const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={classes.Menu}>
            <MenuButton open={open} setOpen={setOpen} />
            <MenuCircle open={open} />
            <MenuList open={open} />
        </div>
    )

}

export default Menu;