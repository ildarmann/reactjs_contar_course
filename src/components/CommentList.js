import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor () {
        super();
        this.state = {
            isOpen: false
        }
    }

    render () {
        return (
            <section>
                {this.getButton()}
                {this.getComments()}
            </section>

        )
    }

    handleClick  = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getButton() {
        const {comments} = this.props;
        if (!comments) return <span>комментариев нет</span>;

        const commentsHeader = this.state.isOpen ?  'Скрыть комментарии' : 'Показать комментарии';
        return(
            <a href='#' onClick={this.handleClick} > {commentsHeader} </a>
        )
    }

    getComments() {
        const {comments} = this.props;
        if (!comments) return null;

        if (!this.state.isOpen) return null;

        const items = comments.map(comment => <li key={comment.id}> <Comment comment = {comment}/>  </li>);
        return(
            <ul>
                {items}
            </ul>
        )
    }
}

export default CommentList

