import React from 'react'
import styles from './subtitle.module.scss'
export const SubTitle = ({children}) => {
    return (
        <h3 className={styles.subTitle}>
            {children}
        </h3>
    )
}
