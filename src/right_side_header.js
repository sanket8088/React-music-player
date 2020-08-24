import React from "react"
import classes from "./right_side_header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faTools } from "@fortawesome/free-solid-svg-icons"

const RightHeader = () => {
    return <div className={classes.headerFull}>
        <div className={classes.searchBoxContainer}>
            <FontAwesomeIcon className={classes.menuIcons} icon={faSearch} />
            <input className={classes.searchBox} placeholder="Search for Songs Artists" />
        </div>
        <div className={classes.headerIcon}>
            <FontAwesomeIcon className={classes.menuIcons} icon={faBell} />
            <FontAwesomeIcon className={classes.menuIcons} icon={faTools} />
            <button className={classes.upgradePlan}>Upgrade Plan</button>
        </div>
    </div>
}

export default RightHeader