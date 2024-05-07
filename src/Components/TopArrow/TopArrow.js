import React, { useEffect } from 'react'
import styles from './TopArrow.module.css'
import { ReactComponent as Arrow } from '../../Assets/arrow.svg'



function TopArrow() {

    

    function handleTopClick(){
        window.scrollTo(0, 0);
    }

  return (
    <button onClick={handleTopClick} className={styles.container}><span className={styles.innerContainer}><Arrow/></span></button>
  )
}

export default TopArrow