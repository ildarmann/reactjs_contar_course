import React, { Component } from 'react'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render () {
        const {article} = this.props;
        const body = this.state.isOpen ? <p>{article.text}</p> : null
        return(
            <section>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
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
