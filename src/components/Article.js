import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    render () {
        const {article} = this.props;
        const {comments} = article;
        const bodyArticle = this.state.isOpen ? <p>{article.text}</p> : null;
        const bodyComment = this.state.isOpen ? <CommentList comments = {comments} /> : null;
        return(
            <section>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {bodyArticle}
                {bodyComment}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
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
