import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Linkedin } from '../../Assets/linkedin.svg'
import { ReactComponent as Insta } from '../../Assets/insta.svg'
import { ReactComponent as Facebook } from '../../Assets/facebook.svg'

function Footer() {
  return (
    <div className={styles.container} id='footer'>
        <div className={styles.subheading}>Have something interesting to talk?</div>
        <div className={styles.heading}>Connect with me!!</div>
        <div className={styles.email}>harsh247gupta@gmail.com</div>
        <div className={styles.social}><a href='https://www.linkedin.com/in/harsh-vardhan-gupta-51446224b/' target='blank'><button><Linkedin/></button></a><a href='https://www.instagram.com/harshvg3/' target='blank'><button><Insta/></button></a><a href='https://www.facebook.com/profile.php?id=100086304926374' target='blank'><button><Facebook/></button></a></div>
    </div>
  )
}

export default Footer