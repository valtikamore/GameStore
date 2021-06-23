import React from 'react'
import styles from "./application.module.scss";

export const Application = () => {
    return (
        <div className={styles.application}>
            <div>
                <div className={styles.fake}>
                </div>
            </div>
            <div>
                <h5>Install the app</h5>
                <p>Get great deals on games wherever you go!</p>
            </div>

        </div>
    )
}
