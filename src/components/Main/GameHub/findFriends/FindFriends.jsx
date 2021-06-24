import React from 'react'
import styles from './FiendFriends.module.scss'
import {SubTitle} from "../../../common/subtitle/subtitle";
import {Button} from "../../../common/Button/Button";
import {Friend} from "./Friend/Friend";


export const FindFriends = ({friends}) => {
    return (
        <div className={styles.wrapper}>
            <SubTitle>
                Who to follow?
            </SubTitle>
            <ul>
                {friends.map((friend,index) => {
                    return <Friend key={`${friend.name}${index}`} image={friend.image} usersCount={friend.usersCount} name={friend.name}/>
                })}
            </ul>
            <Button>
                Discover All
            </Button>
        </div>
    )
}
