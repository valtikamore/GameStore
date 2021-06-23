import React from 'react'
import styles from './post.module.scss'
import {PostHeader} from "./postHeader/postHeader";
import {PostBody} from "./postBody/postBody";
import {PostFooter} from "./postFooter/postFooter";

export const Post = ({comment,followers,items,messegge,pro,time,userImage,userName,userNick}) => {

    return (
        <article className={styles.post}>
            <PostHeader followers={followers} pro={pro} time={time}
                        userName={userName}
                        userNick={userNick}
                        userImage={userImage}/>
              <PostBody message={messegge}/>
              <PostFooter comment={comment} items={items}/>
        </article>
    )
}
