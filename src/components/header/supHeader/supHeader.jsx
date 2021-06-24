import React from 'react'
import styles from './supHeader.module.scss'
import home from '../../../assets/HeadreIcons/supHeaderIcons/icn-home.svg'
import cube from '../../../assets/HeadreIcons/supHeaderIcons/cube.svg'
import games from '../../../assets/HeadreIcons/supHeaderIcons/inc-games.svg'
import market from '../../../assets/HeadreIcons/supHeaderIcons/market.svg'
import {MenuItem} from "./menuItem/MenuItem";

export const SupHeader = () => {

    const menuItems= [
        {name:'Home',icon:home},
        {name:'Social',icon:cube},
        {name:'Market',icon:games},
        {name:'Tournements',icon:market},
    ]
    return (
        <nav className={styles.nav}>
            <ul className={styles.navItems}>
                {menuItems.map((item,index) => {
                    return <MenuItem key={`${item} ${index}`} name={item.name} icon={item.icon} active={item.active} />
                })}

            </ul>
        </nav>
    )
}
