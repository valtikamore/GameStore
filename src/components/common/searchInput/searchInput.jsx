import React from 'react'
import icnSearch from '../../../assets/HeadreIcons/subHeaderIcons/icn-search.svg'
import styles from './searchInput.module.scss'
export const SearchInput = () => {
    return (
        <div  className={styles.searchInputWrapper}>
            <input className={styles.searchInput}
                   type="search" placeholder={'Search games, gears, accessories..'}/>
            <img className={styles.searchIcon} src={icnSearch} alt="search"/>
        </div>
    )
}
