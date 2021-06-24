import React from 'react'
import styles from './upcommingGames.module.scss'
import {BlockTitle} from "../../common/BlockTitle/BlockTitle";
import {Card} from "./Card/Card";
import {Button} from "../../common/Button/Button";


export const UpcomingGames = ({cards}) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.box}>
                <BlockTitle subtitle={'Pre-order an upcoming game to start playing on Day 1.'}>
                    Upcoming Games
                </BlockTitle>
                <section className={styles.cards}>
                    {cards.map((card,index) => {
                        return  <Card key={`${card.name} ${index}`} description={card.description} price={card.price} discont={card.newPrice}/>
                    })}
                </section>
                <div className={styles.flex}>
                    <Button upper>
                        load more
                    </Button>
                </div>

            </div>
        </section>
    )
}
