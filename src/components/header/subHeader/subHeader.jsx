import React from 'react'
import {SearchInput} from "../../common/searchInput/searchInput";
import wallet from "../../../assets/HeadreIcons/subHeaderIcons/wallet.svg";
import bag from "../../../assets/HeadreIcons/subHeaderIcons/bag.svg";
import bell from "../../../assets/HeadreIcons/subHeaderIcons/bell.svg";
import heart from "../../../assets/HeadreIcons/subHeaderIcons/heart.svg";
import profile from "../../../assets/HeadreIcons/subHeaderIcons/icn-profile.svg";
import styles from './subHeader.module.scss'
export const SubHeader = () => {
    return (
        <div className={styles.subHeader}>
            <SearchInput/>
            <img src={wallet} alt=""/>
            <img src={bag} alt=""/>
            <img src={bell} alt=""/>
            <img src={heart} alt=""/>
            <img src={profile} alt=""/>
        </div>
    )
}
