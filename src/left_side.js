import React from 'react'
import user_img from "./images/user_icon.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBox, faBook, faUser, faVideo, faClock, faFile } from "@fortawesome/free-solid-svg-icons"
import classes from "./left_side.module.css"

const LeftSideapp = () => {
    return <div className={classes.leftMainContainer}>
        <div className={classes.imgContainer}><img className={classes.wholeImage} src={user_img} alt="User-icon" /></div>
        <div className={classes.userInfoContainer}>
            <div className={classes.userName}><b>Invoker</b></div>
            <div className={classes.userEmail}>Luova.studio7@gmail.com</div>
        </div>
        <div className={classes.mainMenuContainer}>
            <div className={classes.mainMenuItems}>
                <FontAwesomeIcon className={classes.menuIcons} icon={faHome} />
                Home</div>
            <div className={classes.mainMenuItems}>
                <FontAwesomeIcon className={classes.menuIcons} icon={faBox} />
                Browse</div>
            <div className={classes.mainMenuItems}>
                <FontAwesomeIcon className={classes.menuIcons} icon={faBook} />
                Album</div>
            <div className={classes.mainMenuItems}>
                <FontAwesomeIcon className={classes.menuIcons} icon={faUser} />
                Artists</div>
            <div className={classes.mainMenuItems}>
                <FontAwesomeIcon className={classes.menuIcons} icon={faVideo} />
                Videos</div>
        </div>
        <div className={classes.myMusicContainer}>
            <div className={classes.myMusic}>MY MUSIC</div>

            <div className={classes.mainMenuItems}>
                <FontAwesomeIcon className={classes.menuIcons} icon={faClock} />
                Recently Played
            </div>
            <div className={classes.mainMenuItems}>
                <FontAwesomeIcon className={classes.menuIcons} icon={faFile} />
                Local Files
            </div>
        </div>

    </div>

}

export default LeftSideapp;