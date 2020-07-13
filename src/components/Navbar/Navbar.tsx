import React from 'react';
import classes from "./Navbar.module.css"


export function Navbar() {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>Home</div>
            <div className={classes.item}>Info</div>
            <div className={classes.item}>Posts</div>
        </div>
    )
}