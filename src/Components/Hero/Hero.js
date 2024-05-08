import styles from './Hero.module.css'
import React, { useEffect } from 'react'
import { ReactComponent as Linkedin } from '../../Assets/linkedin.svg'
import { ReactComponent as Insta } from '../../Assets/insta.svg'
import { ReactComponent as Facebook } from '../../Assets/facebook.svg'
function Hero() {
    return (
        <div className={styles.container} id='home'>
            
            <div className={styles.box1}>
                <div>Hello!</div>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>
                        I am a Web Developer,
                    </span>
                </div>
                <div>Hockey Player and KGPian</div>
                <div className={styles.resumeContainer}><a href='https://drive.google.com/file/d/1KkasiBBXWv53iWcmsCeF09H31QkeWob_/view?usp=sharing' target='blank'><button className={styles.resume} >Resume</button></a></div>
                <div className={styles.social}><a href='https://www.linkedin.com/in/harsh-vardhan-gupta-51446224b/' target='blank'><button><Linkedin/></button></a><a href='https://www.instagram.com/harshvg3/' target='blank'><button><Insta/></button></a><a href='https://www.facebook.com/profile.php?id=100086304926374' target='blank'><button><Facebook/></button></a></div>
            </div>
           
        </div>
    )
}

export default Hero