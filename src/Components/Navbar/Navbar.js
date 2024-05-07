import React from 'react'
import styles from './Navbar.module.css'


function Navbar() {
  return (
    <>
    <div className={styles.empty}></div>
    <header className={styles.container}>
        <div className={styles.box1}>
            <span><b>Harsh</b></span>
            </div>
        <nav className={styles.box2}>
            <a href='#'>Home</a>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='https://drive.google.com/file/d/1KkasiBBXWv53iWcmsCeF09H31QkeWob_/view?usp=sharing' target='blank'>Resume</a>
            <a href='#footer'>Contact</a>

        </nav>
    </header>
    </>
  )
}

export default Navbar