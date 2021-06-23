import React from 'react'
import styles from './channel.module.scss'

export const Channel = ({image,name,usersCount}) => {
    return (
        <li className={styles.channel}>
            <img src={image} alt={name}/>
            <div className={styles.about}>
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.followers}>
                    {usersCount} Users
                </div>
            </div>
        </li>
    )
}
