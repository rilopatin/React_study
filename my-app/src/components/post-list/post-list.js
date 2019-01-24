import React, {Component} from 'react'

import PostListItem from '../post-list-item'
import { ListGroup } from 'reactstrap'
import './post-list.css'

const PostList = ({posts, onDelete}) => {
    const elements = posts.map((elem) => {
        const {id, ...elemPost} = elem
        if (elemPost.hasOwnProperty('label')) {
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem
                        {...elemPost}
                        onDelete={() => onDelete(id)}/>
                </li>
            )
        }
    })
        return (
            <ListGroup className="app-list">
                {elements}
            </ListGroup>
        )

}

export default PostList

