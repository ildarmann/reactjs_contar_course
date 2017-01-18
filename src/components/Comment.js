import React from 'react'

export default Comment (props) {
    const { comment } = props 
    return(
        {comment.text}
    )
}
