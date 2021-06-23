import React from 'react'
import {Button} from "../Button/Button";
import styles from './BlockTitle.module.scss'

export const BlockTitle = ({color,subtitle,children}) => {
    return (
        <div className={`${styles.BlockTitle} ${color && styles.yellow}`}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{children}</h2>
                <p>
                    {subtitle}
                </p>
            </div>

                <Button>
                    Discover All
                </Button>
        </div>
    )
}
