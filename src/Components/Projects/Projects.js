import React from 'react'
import styles from './Projects.module.css'


function Projects() {
    return (
        <div className={styles.container} id='projects'>
            <h3 className={styles.title}>My <b>Projects</b></h3>
            <h4 className={styles.subtitle}>Here are some of my recent works</h4>
            <div className={styles.innerContainer}>
                <div className={styles.card}>
                    <div className={styles.box1}>
                        <div className={`${styles.image1} ${styles.opensoft1}`}></div>
                        <div className={`${styles.image2} ${styles.opensoft2}`}></div>

                    </div>
                    <div className={styles.box2}>
                        <div className={styles.projectTitle}>
                            <b>Movie recommendation, Autocomplete and Fuzzy search</b>
                        </div>
                        <ul className={styles.descriptionList}>
                            <li>Real time auto complete suggestions and highlighted fuzzy and semantic search results</li>
                            <li>Support Natural Language Queries</li>
                            <li>Advanced Video Playback</li>
                        </ul>
                        <div className={styles.projectSubtitle}>Tech Stack</div>
                        <ul className={styles.stackList}>
                            <li>React</li>
                            <li>FastAPI</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                            <li>Google API</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.box1}>
                        <div className={`${styles.image1} ${styles.kshitij1}`}></div>
                        <div className={`${styles.image2} ${styles.kshitij2}`}></div>

                    </div>
                    <div className={styles.box2}>
                        <div className={styles.projectTitle}>
                            <b>Website for Kshitij(Techno-Management Fest)</b>
                        </div>
                        <ul className={styles.descriptionList}>
                            <li>Kshitij is one of the Asia's largest Techno-Management Fest</li>
                            <li>Utilised by thousands of guests during fest time</li>
                        </ul>
                        <div className={styles.projectSubtitle}>Tech Stack</div>
                        <ul className={styles.stackList}>
                            <li>React</li>
                            <li>Node JS</li>
                            <li>MongoDB</li>
                            <li>Express JS</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects