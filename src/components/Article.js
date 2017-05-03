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
        return(
            <section>
                <h3 onClick = {this.handleClick} > {article.title} </h3>
                {this.getBody()}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return(
            <div>
                <p>{article.text}</p>
                <CommentList comments = {article.comments} />
            </div>
        )
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
