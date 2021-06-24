import React from 'react'
import {GameHub} from "./GameHub/GameHub";
import {UpcomingGames} from "./UpcommingGames/upcomingGames";
import {Mail} from "./Mail/Mail";
import {SubFooter} from "./subFooter/subFooter";

export const Main = ({cards,channels,friends,posts}) => {
    return (
        <>
            <GameHub posts={posts} channels={channels}
                     friends={friends}/>
            <UpcomingGames cards={cards}/>
            <Mail/>
            <SubFooter/>
        </>
    )
}
