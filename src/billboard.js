import React from 'react'
import lord_huron from "./images/lord_huron.jpg"
import cold_mess from "./images/cold_mess.webp"
import apocalypse from "./images/apocalypse.jpg"
import powfu from "./images/powfu.png"
import phos from "./images/phos.jpg"
import sound from "./images/soundOfSilence.jpg"
import xxx from "./images/xxx.png"
import classes from "./billboard.module.css"

const Billboard = () => {
    return <div className={classes.billboardContainer}>
        <b>Billboard Topchart</b>
        <div className={classes.albumContainer}>
            <div className={classes.singleAlbum}>
                <div className={classes.image}>
                    <img className={classes.singleCover} src={lord_huron} />
                </div>
                <div className={classes.AlbumInfo}>
                    <b className={classes.AlbumName}>
                        The night we met
                    </b>
                    <p className={classes.SingerName}>
                        Lord Huron
                    </p>
                </div>
            </div>

            <div className={classes.singleAlbum}>
                <div className={classes.image}>
                    <img className={classes.singleCover} src={cold_mess} />
                </div>
                <div className={classes.AlbumInfo}>
                    <b className={classes.AlbumName}>
                        Cold Mess
                    </b>
                    <p className={classes.SingerName}>
                        Prateek Kuhad
                    </p>
                </div>
            </div>

            <div className={classes.singleAlbum}>
                <div className={classes.image}>
                    <img className={classes.singleCover} src={apocalypse} />
                </div>
                <div className={classes.AlbumInfo}>
                    <b className={classes.AlbumName}>
                        Apocalypse
                    </b>
                    <p className={classes.SingerName}>
                        Cigarettes After Sex
                    </p>
                </div>
            </div>

            <div className={classes.singleAlbum}>
                <div className={classes.image}>
                    <img className={classes.singleCover} src={powfu} />
                </div>
                <div className={classes.AlbumInfo}>
                    <b className={classes.AlbumName}>
                        Death Bed
                    </b>
                    <p className={classes.SingerName}>
                        Powfu
                    </p>
                </div>
            </div>

            <div className={classes.singleAlbum}>
                <div className={classes.image}>
                    <img className={classes.singleCover} src={phos} />
                </div>
                <div className={classes.AlbumInfo}>
                    <b className={classes.AlbumName}>
                        Song of Zula
                    </b>
                    <p className={classes.SingerName}>
                        Phosphorent
                    </p>
                </div>
            </div>

            <div className={classes.singleAlbum}>
                <div className={classes.image}>
                    <img className={classes.singleCover} src={sound} />
                </div>
                <div className={classes.AlbumInfo}>
                    <b className={classes.AlbumName}>
                        Song of Zula
                    </b>
                    <p className={classes.SingerName}>
                        Phosphorent
                    </p>
                </div>
            </div>


            <div className={classes.singleAlbum}>
                <div className={classes.image}>
                    <img className={classes.singleCover} src={xxx} />
                </div>
                <div className={classes.AlbumInfo}>
                    <b className={classes.AlbumName}>
                        Hope
                    </b>
                    <p className={classes.SingerName}>
                        XXXtentacion
                    </p>
                </div>
            </div>

        </div>
    </div>
}

export default Billboard