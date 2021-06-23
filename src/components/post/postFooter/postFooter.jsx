import React from 'react'
import repost from "../../../assets/post/dealings/repost.svg";
import download from "../../../assets/post/dealings/download.svg";
import clap from "../../../assets/post/dealings/clap.svg";
import styles from './postFooter.module.scss'
import classNames from "classnames";
export const PostFooter = ({comment,items}) => {
    return (
        <footer className={styles.postFooter}>
            <div className={styles.dealing}>
                <img src={repost} alt=""/>
                <img src={download} alt=""/>
                <img src={clap} alt=""/>
                {items}
            </div>

            <div className={classNames(styles.comments,{
                [styles.commentsRej] : !comment
            })}>
                {comment ? `${comment} Comments` :`Add your comment`}
                <img src="" alt=""/>
            </div>
        </footer>

    )
}
