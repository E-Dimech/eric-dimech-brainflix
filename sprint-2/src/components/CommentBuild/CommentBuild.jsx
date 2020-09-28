import React from 'react';
import DateStamp from '../TimeConversion/TimeConversion';
import './CommentBuild.scss';

const CommentBuild = ({ comment }) =>  
    comment.map((object) => {
        return (
            <div key={object.id} className="comment-build">
                <div className="comment-build__container">
                    <div className="comment-build__circle" />
                    <p className="comment-build__name">{object.name}</p>
                    <p className="comment-build__date">{DateStamp(object.timestamp)}</p>
                    <p className="comment-build__comment">{object.comment}</p>
                </div>
            </div>
        );

    });


export default CommentBuild;