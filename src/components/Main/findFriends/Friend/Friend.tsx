import React from 'react'


export const Friend = ({}) => {
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
