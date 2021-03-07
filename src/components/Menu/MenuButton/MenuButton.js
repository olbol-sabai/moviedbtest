import React from 'react';
import classes from './MenuButton.module.scss';



const MenuButton = ({ open, setOpen }) => {


    const menuDivStyles = { height: '3px', backgroundColor: 'white', width: '30px', marginBottom: '5px', borderRadius: '2px' }

    return (
        <div
            className={classes.Button}
            onClick={() => setOpen(o => !o)}>
            <div style={menuDivStyles}
                className={open ? classes.InnerDiv1Open : null}></div>
            {!open && (<div style={menuDivStyles}
                className={classes.InnerDiv2Open}></div>)}
            < div style={menuDivStyles}
                className={open ? classes.InnerDiv3Open : null}></div>
        </div >
    )

}

export default MenuButton;