import React from "react"
import RightHeader from "./right_side_header"
import Billboard from "./billboard"
import classes from "./right_side.module.css"
import PlayList from "./playlist"

const RightSideContent = () => {
    return <div className={classes.rightMainContainer}>
        <RightHeader />
        <Billboard />
        <div className={classes.PlaycontainerWhole}>
            <PlayList />
        </div>
    </div>

}

export default RightSideContent