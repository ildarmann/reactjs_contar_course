import React, {Component, PropTypes} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array
    }


    render () {
        return (
            <section>
                {this.getButton()}
                {this.getComments()}
            </section>

        )
    }


    getButton() {
        const {comments, isOpen, toggleOpen} = this.props;
        if (!comments) return <span>комментариев нет</span>;

        const commentsHeader = isOpen ?  'Скрыть комментарии' : 'Показать комментарии';
        return(
            <a href='#' onClick={toggleOpen} > {commentsHeader} </a>
        )
    }

    getComments() {
        const {comments, isOpen} = this.props;
        if (!comments) return null;

        if (!isOpen) return null;

        const items = comments.map(comment => <li key={comment.id}> <Comment comment = {comment}/>  </li>);
        return(
            <ul>
                {items}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)

