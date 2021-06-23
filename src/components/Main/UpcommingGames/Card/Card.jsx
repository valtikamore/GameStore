import React from 'react'
import styles from './Card.module.scss'
import {Button} from "../../../common/Button/Button";
import heart from '../../../../assets/HeadreIcons/subHeaderIcons/heart.svg'
export const Card = ({description,discont,price}) => {
    return (
        <div className={styles.card}>
           <div className={styles.fake}>
               <img src={heart} alt="heart"/>
           </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.price}>{price}</div>
            <div className={styles.discont}>{price}  <span className={styles.newPrice}> {discont}</span></div>
            <Button fill>Pre Order</Button>
        </div>
    )
}
