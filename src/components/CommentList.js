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
        const {comments} = this.props;
        let commentsHeader;
        let commentsBody;
        if (!!!comments) {
            commentsHeader = <p>комментариев нет</p>
        }else {
            commentsHeader = this.state.isOpen ? <p> Скрыть комментарии </p> : <p> Показать комментарии </p>;
            commentsBody = this.state.isOpen && comments !== undefined?
                comments.map(comment => <li key={comment.id}> <Comment comment = {comment}/>  </li>)
                : null;
        }



        return (
            <section>
                <h4 onClick={this.handleClick} > {commentsHeader} </h4>
                <ul>{commentsBody}</ul>

            </section>

        )
    }

    handleClick  = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList

