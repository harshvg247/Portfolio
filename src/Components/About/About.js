import React, { useState } from 'react'
import styles from './About.module.css'


function About() {
    const [copy, setCopy] = useState('Copy');

    function handleCopyBtn() {
        // Write text to clipboard
        const textToCopy = "01001010 01110101 01110011 01110100 00100000 01110111 01100001 01110011 01110100 01101001 01101110 01100111 00100000 01111001 01101111 01110101 01110010 00100000 01110100 01101001 01101101 01100101";
        navigator.clipboard.writeText(textToCopy)
            .then(function () {
                // Clipboard write successful
                // alert('Text copied to clipboard: ' + textToCopy);
                setCopy('Copied');
                setTimeout(()=>{
                    setCopy('Copy')}, 5000)
            })
            .catch(function (err) {
                // Clipboard write failed
                alert('Failed to copy text to clipboard: ' + err);
            });
    }

    return (
        <div className={styles.container} id='about'>
            <div className={styles.filler}></div>

            <div className={styles.innerContainer}>
                <div className={styles.box1}>
                    <div>1</div>
                    <div>2<button onClick={handleCopyBtn}>{copy}</button></div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                </div>
                <div className={styles.box2}>
                    <h3 className={styles.title} id='title'>About <b>Me</b></h3>
                    <div className={styles.description}>
                        <div>Hello! I'm Harsh, a passionate web developer currently pursuing a bachelor's degree in Mathematics and Computing from IIT Kharagpur. </div>
                        <div>
                            I have a strong interest in both frontend and backend technologies, with experience working with Django for backend development and the MERN stack for full-stack web applications.
                        </div>
                        <div>
                            Aside from coding, I enjoy playing hockey and find joy in gardening.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About