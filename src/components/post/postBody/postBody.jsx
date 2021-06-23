import React from 'react'
import styles from '../post.module.scss'
import ReadMoreReact from 'read-more-react';
export const PostBody = ({message}) => {
    return (
        <p className={styles.message}>
            <ReadMoreReact text={message}
                           min={111}
                           ideal={120}
                           max={200}
                           readMoreText="Read more"/>
        </p>
    )
}
