import React from 'react'
import styles from './inputEmail.module.scss'
import bag from '../../../assets/HeadreIcons/subHeaderIcons/bag.svg'
export const InputEmail = ({placeholder}) => {
    return (
        <div className={styles.inputEmail}>
            <img src={bag} alt=""/>
            <input type="email" placeholder={placeholder}/>
        </div>
    )
}
