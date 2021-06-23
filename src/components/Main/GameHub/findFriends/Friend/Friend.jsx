import React from 'react'
import styles from './Friend.module.scss'
import friend from '../../../../../assets/addNewfriend/addFriend.svg'
export const Friend = ({image,name,usersCount}) => {
    return (
        <li className={styles.friend}>
            <div className={styles.wrapper}>
                <img src={image} alt={name}/>
                <div className={styles.about}>
                    <div className={styles.name}>
                        {name}
                    </div>
                    <div className={styles.followers}>
                        {usersCount} Users
                    </div>

                </div>
            </div>

            <img src={friend} alt="friend" className={styles.addicon}/>
        </li>
    )
}
