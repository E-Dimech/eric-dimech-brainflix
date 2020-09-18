import React from 'react';
import './commentBuild.scss';


function CommentBuild({name, date, comment }) {
    return (
        <div className="comment-build">
            <div className="comment-build__container">
                <div className="comment-build__circle" />
                <p className="comment-build__name">{name}</p>
                <p className="comment-build__date">{date}</p>
                <p className="comment-build__comment">{comment}</p>
            </div>
        </div>
    )
}

export default CommentBuild;