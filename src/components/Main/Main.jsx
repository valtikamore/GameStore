import React from 'react'
import styles from './Main.module.scss'
import paladin from '../../assets/post/userPostImages/palad.jpg'
import leroy from '../../assets/post/userPostImages/leroy.png'
import onyx from '../../assets/post/userPostImages/onyx.jpg'
import {MainBlockTitle} from "./1_MainBlockTitle/Mainblocktitle";
import {Posts} from "./posts/posts";
import {Channels} from "./Channels/Channels";
import cod from '../../assets/channels/cod.png'
import diablo from '../../assets/channels/diablo.png'
import fortnite from '../../assets/channels/fortnite.png'
import hs from '../../assets/channels/hs.png'
import wow from '../../assets/channels/wow.png'
import pubg from '../../assets/channels/pubg.png'
import over from '../../assets/channels/over.png'
import {FindFriends} from "./findFriends/FindFriends";

export const Main = () => {


    const posts = [
        {
            username: 'MrPaladin',
            userNick: '@mrpaladin',
            followers: 15,
            time: '3hrs ago',
            message: 'Sniper isnt overpowered.\n' +
                'Sniper has some of the lowest damage outputs in the game. 50 damage per shot is terrible, especially with the fire rate.Compared to heavy, who has 400+ DPS!.. Read Moretell me how sniper compares.',
            items: '296',
            commentsCount: 15,
            pro: false,
            userImage: paladin
        },
        {
            username: 'LeroyJenkins',
            userNick: '@leroyjenkins',
            followers: 3253,
            time: '15mins ago',
            message: 'It\'ll still be long enough that it cannot be spammed. But will increase usefulness of the watch by not.. ',
            items: null,
            commentsCount: null,
            pro: true,
            userImage: leroy
        },
        {
            username: 'ONYXSnake1223',
            userNick: '@ONYXSnake1223',
            followers: 125,
            time: '15mins ago',
            message: 'If you\'ve not yet played CS:GO, do yourself a favor and play first. Excellent game, and this one ties in heavily with the story from the last..  ',
            items: '1.2k',
            commentsCount: 156,
            pro: true,
            userImage: onyx
        }
    ]
    const channels = [
        {image:wow,name:'#social Hub',usersCount:'195K'},
        {image:fortnite,name:'#Fortnite',usersCount:'240K'},
        {image:wow,name:'#World of War Craft',usersCount:'195K'},
        {image:pubg,name:'#PUBG Mobile',usersCount:'220K'},
        {image:hs,name:'#HearthStone',usersCount:'195K'},
        {image:cod,name:'#Call of DutyO',usersCount:'195K'},
        {image:over,name:'#Overwatch',usersCount:'195K'},
        {image:diablo,name:'#Diablo III',usersCount:'195K'},
    ]
    const friends = [
        {image:wow,name:'XMegatronX',usersCount:'325.860 Followers'},
        {image:fortnite,name:'Rikimarue',usersCount:'285.020 Followers'},
        {image:wow,name:'Wolfie',usersCount:'433.642 Followers'},
        {image:pubg,name:'Rikimarue',usersCount:'312.245 Followers'},
        {image:hs,name:'MrPaladin',usersCount:'285.020 Followers'},
        {image:cod,name:'Supreme',usersCount:'433.642 Followers'},
        {image:over,name:'Murmur',usersCount:'312.245 Followers'},
        {image:diablo,name:'Loremiosum',usersCount:'312.245 Followers'},
    ]

    return (
        <main className={styles.container}>
            <MainBlockTitle/>
            <section className={styles.gameHub}>
                <Posts posts={posts}/>
                <Channels channels={channels}/>
                <FindFriends friends={friends}/>
            </section>
        </main>
    )
}
