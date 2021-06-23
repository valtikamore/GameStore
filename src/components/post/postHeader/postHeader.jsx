import React from 'react'
import styles from './postHeader.module.scss'

export const PostHeader = ({followers, pro, time, userImage, userName, userNick}) => {
    return (
        <header className={styles.postHeader}>
            <img className={styles.userImage} src={userImage} alt={`${userNick}`}/>
            <div className={styles.wrapper}>
                <div className={styles.userName}>
                    {userName} {pro && <span className={styles.pro}>PRO</span>}
                </div>
                <a className={styles.userNick} href={'#'}>{userNick}</a>
                <span className={styles.followers}>{followers} Followers</span>
            </div>
                <div className={styles.time}>{time}</div>
        </header>
    )
}
