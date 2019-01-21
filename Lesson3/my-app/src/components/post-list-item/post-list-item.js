import React from 'react'

import './post-list-item.css'
import PostDate from "../post-date/"

const PostListItem = () => {
    const date = new Date();
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello World!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
                <PostDate />
            </div>
        </li>
    )
}

export default PostListItem