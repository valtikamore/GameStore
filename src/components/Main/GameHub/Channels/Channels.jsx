import React from 'react'
import styles from './Channels.module.scss'
import {SubTitle} from "../../../common/subtitle/subtitle";
import {Channel} from "./channel/channel";
import {Button} from "../../../common/Button/Button";

export const Channels = ({channels}) => {
    return (
        <div className={styles.wrapper}>
            <SubTitle>
                Channels
            </SubTitle>
            <ul>
                {channels.map((channel,index) => {
                    return <Channel key={`${channel.name} ${index}`} image={channel.image} usersCount={channel.usersCount} name={channel.name}/>
                })}
            </ul>
            <Button>
                Find More
            </Button>
        </div>
    )
}
