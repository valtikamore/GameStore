import React from 'react'
import styles from './subFooter.module.scss'
import {List} from "../../common/list/list";
import apple from '../../../assets/footerIcons/apple.svg'
import play from '../../../assets/footerIcons/play.svg'
import {Application} from "./application/application";
import {ApplicationOs} from "./applicationOs/ApplicationOs";



export const SubFooter = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.lists}>
                    <List>LA3EB</List>
                    <List>HELP</List>
                    <List>BUSINESS</List>
                </div>
                <div className={styles.applicationWrapper}>
                    <Application/>
                </div>
                <div className={styles.applicationOsApple}>
                    <ApplicationOs image={apple}>
                        Download on the
                        App Store®
                    </ApplicationOs>
                </div>
                <div className={styles.applicationOsAndroid}>
                    <ApplicationOs image={play}>
                        Get it on
                        Google Play©
                    </ApplicationOs>
                </div>



            </div>
        </section>
    )
}
