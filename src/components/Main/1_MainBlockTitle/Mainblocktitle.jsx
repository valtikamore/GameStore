import React from 'react'
import {Button} from "../../common/Button/Button";
import styles from './mainBlockTitle.module.scss'

export const MainBlockTitle = () => {
    return (
        <div className={styles.mainBlockTitle}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Games Hub</h2>
                <p>
                    The best offers, new games, AAA titles
                    and high-quality video games..
                </p>
            </div>

                <Button>
                    Discover All
                </Button>
        </div>
    )
}
