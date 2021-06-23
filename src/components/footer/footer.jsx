import React from 'react'
import styles from './footer.module.scss'
import paypal from '../../assets/footerIcons/paypal.svg'
import mastercard from '../../assets/footerIcons/mastercard.svg'
import visa from '../../assets/footerIcons/visa.svg'
export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.box}>
                <small>Copyright © 2020. All Rights Reserved.<br/>
                    Use of this Web site constitutes acceptance of the Terms and Conditions and Privacy policy.<br/> All copyrights, trade marks, service marks belong to the corresponding owners.</small>
                <div className={styles.payload}>
                    <img src={paypal} alt="paypal"/>
                    <img src={mastercard} alt="mastercard"/>
                    <img src={visa} alt="visa"/>
                </div>
            </div>
        </footer>
    )
}
