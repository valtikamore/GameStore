import React from 'react'
import {SubTitle} from "../../../common/subtitle/subtitle";
import {Post} from "../../../post/post";

export const Posts = ({posts}) => {
    return (
        <div>
            <SubTitle>
                Latest posts
            </SubTitle>
            {posts.map((post,index) => {
                return <Post    key={`${index} ${post.name}`}
                    userImage={post.userImage}
                             userName={post.username}
                             userNick={post.userNick}
                             followers={post.followers}
                             time={post.time}
                             messegge={post.message}
                             comment={post.commentsCount}
                             pro={post.pro}
                             items={post.items}
                />
            })}

        </div>
    )
}
