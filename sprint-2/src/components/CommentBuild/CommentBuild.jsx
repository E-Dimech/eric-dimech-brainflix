import React from 'react';
import './CommentBuild.scss';


const CommentBuild = ({ comment }) =>  
    comment.map((object) => {
        return (
            <div key={object.id} className="comment-build">
                <div className="comment-build__container">
                    <div className="comment-build__circle" />
                    <p className="comment-build__name">{object.name}</p>
                    <p className="comment-build__date">{object.date}</p>
                    <p className="comment-build__comment">{object.comment}</p>
                </div>
            </div>
        );

    });


export default CommentBuild;