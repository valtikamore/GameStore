import React from 'react'
import styles from './MenuItem.module.scss'

export const MenuItem = ({icon,name}) => {

    return (
        <li className={styles.item} >
            <img src={icon} alt=""/>
            <a href="#"> {name}</a>
        </li>
    )
}
