import React from 'react'
import styles from './Header.module.scss'
import {SubHeader} from "./subHeader/subHeader";
import {SupHeader} from "./supHeader/supHeader";


export const Header = ({menuItems}) => {
    return (
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <div className={styles.blackBox}> </div>
                <div className={styles.wrapper}>
                    <SubHeader/>
                    <SupHeader menuItems={menuItems}/>
                </div>

            </header>
        </div>

    )
}
