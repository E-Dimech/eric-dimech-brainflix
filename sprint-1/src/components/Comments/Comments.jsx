import React from 'react';
import CommentBuild from '../CommentBuild/CommentBuild';
import './comments.scss';


class Comments extends React.Component {
    state = {
        defaultComments: [
            {
                id: 0,
                name: "Michael Lyons",
                date: "01/14/2020",
                comment: "They BLEW the ROOF off a their last show, once everyone starting figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
            },
            {
                id: 1,
                name: "Gary Wong",
                date: "01/01/2020",
                comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"
            },
            {
                id: 2,
                name: "Theodore Duncan",
                date: "12/13/2019",
                comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He's definitely my favourite ever!" 
            },
        ]


    };


    render() {
        return (
        <>
            {this.state.defaultComments.map((comment) => (
                <CommentBuild 
                    key={comment.id}
                    name={comment.name}
                    date={comment.date}
                    comment={comment.comment}
                />
            ))}
        </>

        );
    }
}

export default Comments;
