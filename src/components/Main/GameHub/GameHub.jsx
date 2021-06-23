import React from 'react'
import styles from './GameHub.module.scss'

import {BlockTitle} from "../../common/BlockTitle/BlockTitle.jsx";
import {Posts} from "./posts/posts";
import {Channels} from "./Channels/Channels";

import {FindFriends} from "./findFriends/FindFriends";

export const GameHub = ({channels,friends,posts}) => {
    return (
        <section className={styles.container}>
            <BlockTitle
                        subtitle={'The best offers,' +
                        ' new games, AAA titles and high-quality video games..'}
                        color={'yellow'}>
                Game hub
            </BlockTitle>
            <section className={styles.gameHub}>
                <Posts posts={posts}/>
                <Channels channels={channels}/>
                <FindFriends friends={friends}/>
            </section>
        </section>
    )
}
