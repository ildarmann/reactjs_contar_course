import React, {PropTypes} from 'react'

export default function Comment (props) {
    const { title, user, text } = props.comment;
    const  header = !!title && <h4> {title} </h4>;
    return(
        <div>
            {header}
            <p>{text}  <b>by {user}</b> </p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        title: PropTypes.string,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
}

/*

TODO
- Decorator
- обратный поток данных*/
