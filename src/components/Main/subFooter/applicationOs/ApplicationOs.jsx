import React from 'react'
import styles from './applicationOs.module.scss'

export const ApplicationOs = ({image,children}) => {
    return (
        <div className={styles.appOs}>
            <img src={image} alt="apple"/>
            <p>{children}
            </p>
        </div>
    )
}
