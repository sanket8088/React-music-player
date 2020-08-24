import React from 'react'
import classes from "./playlist.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons"
import phos from "./images/phos.jpg"
import sound from "./images/soundOfSilence.jpg"
import xxx from "./images/xxx.png"
import dota from "./images/dota.jpg"
import powfu from "./images/powfu.png"

const PlayList = () => {
    return <div className={classes.playlistContainer}>
        <h2 className={classes.mostPopular}>Most Popular</h2>
        <p className={classes.totalSongs}>92 Songs</p>
        <div className={classes.songsList}>

            <div className={classes.songDetail}>
                <b>01</b>
                <div className={classes.songThumbnail}>
                    <img className={classes.thumbNailSong} src={dota} />
                </div>
                <FontAwesomeIcon className={classes.menuIcons} icon={faPlay} />
                <b>My Stress</b>
                <p className={classes.songSinger}>NF Real Music</p>
                <p className={classes.songTime}>3.22</p>
                <FontAwesomeIcon className={classes.menuIcons, classes.redIcon} icon={faHeart} />
            </div>

            <div className={classes.songDetail}>
                <b>02</b>
                <div className={classes.songThumbnail}>
                    <img className={classes.thumbNailSong} src={phos} />
                </div>
                <FontAwesomeIcon className={classes.menuIcons} icon={faPlay} />
                <b>My Stress</b>
                <p className={classes.songSinger}>NF Real Music</p>
                <p className={classes.songTime}>3.22</p>
                <FontAwesomeIcon className={classes.menuIcons} icon={faHeart} />
            </div>


            <div className={classes.songDetail}>
                <b>03</b>
                <div className={classes.songThumbnail}>
                    <img className={classes.thumbNailSong} src={sound} />
                </div>
                <FontAwesomeIcon className={classes.menuIcons} icon={faPlay} />
                <b>My Stress</b>
                <p className={classes.songSinger}>NF Real Music</p>
                <p className={classes.songTime}>3.22</p>
                <FontAwesomeIcon className={classes.menuIcons, classes.redIcon} icon={faHeart} />
            </div>


            <div className={classes.songDetail}>
                <b>04</b>
                <div className={classes.songThumbnail}>
                    <img className={classes.thumbNailSong} src={xxx} />
                </div>
                <FontAwesomeIcon className={classes.menuIcons} icon={faPlay} />
                <b>My Stress</b>
                <p className={classes.songSinger}>NF Real Music</p>
                <p className={classes.songTime}>3.22</p>
                <FontAwesomeIcon className={classes.menuIcons, classes.redIcon} icon={faHeart} />
            </div>


            <div className={classes.songDetail}>
                <b>05</b>
                <div className={classes.songThumbnail}>
                    <img className={classes.thumbNailSong} src={dota} />
                </div>
                <FontAwesomeIcon className={classes.menuIcons} icon={faPlay} />
                <b>My Stress</b>
                <p className={classes.songSinger}>NF Real Music</p>
                <p className={classes.songTime}>3.22</p>
                <FontAwesomeIcon className={classes.menuIcons} icon={faHeart} />
            </div>


            <div className={classes.songDetail}>
                <b>06</b>
                <div className={classes.songThumbnail}>
                    <img className={classes.thumbNailSong} src={powfu} />
                </div>
                <FontAwesomeIcon className={classes.menuIcons} icon={faPlay} />
                <b>My Stress</b>
                <p className={classes.songSinger}>NF Real Music</p>
                <p className={classes.songTime}>3.22</p>
                <FontAwesomeIcon className={classes.menuIcons, classes.redIcon} icon={faHeart} />
            </div>


        </div>

    </div>

}

export default PlayList