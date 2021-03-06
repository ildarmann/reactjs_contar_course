import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

function Article(props) {

    const {article, toggleOpen} = props;
    return(
        <section>
            <h3 onClick = {toggleOpen} > {article.title} </h3>
            {getBody(props)}
        </section>
    )
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        comments: PropTypes.array,
        text: PropTypes.string.isRequired
    }).isRequired,
    toggleOpen: PropTypes.func.isRequired
};

function getBody(props) {
    const {article, isOpen} = props;
    if (!isOpen) return null;

    return(
        <div>
            <p>{article.text}</p>
            <CommentList comments = {article.comments} />
        </div>
    )
}

export default Article


/*
export default props => {
    const {article} = props;
    return(
        <section>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </section>
    )
}

*/
