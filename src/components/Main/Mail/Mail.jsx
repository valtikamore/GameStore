import React from 'react'
import styles from './Mail.module.scss'
import {Button} from "../../common/Button/Button";
import {InputEmail} from "../../common/inputEmail/inputEmail";
export const Mail = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.box}>
                <h4>Get your best games deals first</h4>
                <InputEmail placeholder={'Enter your email'}/>
                <Button fill>Subscribe</Button>
            </div>

        </section>
    )
}
