import React from 'react'

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
