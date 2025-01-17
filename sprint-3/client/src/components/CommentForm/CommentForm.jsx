import React from 'react';
import Mohan from '../../assets/Images/Mohan-muruge.jpg';
import './CommentForm.scss';


const CommentForm = () => {
    return (
    <>
        <p className="comment-count">3 Comments</p>  
        <form className="comment-form" name="comment-form">
            <img className="comment-form__img" src={Mohan} alt="User Mohan badge"/>
            <ul className="comment-form__list">
                <li className="comment-form__name">
                    <label id="name-label" htmlFor="comment-form">JOIN THE CONVERSATION</label>
                    <textarea className="comment-form__input" type="text" id="name" name="user-name" placeholder="Write comment here" />
                </li>
                <li className="comment-form__button-container">
                    <button className="comment-form__button" id="button">COMMENT</button>
                </li>
            </ul>
        </form>
    </>
    )
}

export default CommentForm;