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
            <img src={profile} alt="profile"/>
            <img src={wallet} alt="wallet"/>
            <img src={bell} alt="bell"/>
            <img src={heart} alt="heart"/>
            <img src={bag} alt="bag"/>
        </div>
    )
}
