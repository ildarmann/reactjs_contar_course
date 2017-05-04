import React from 'react'

export default (Component) => class AccordionArticle extends React.Component{

    state = {
        openArticleID: null,
        isOpen: false
    };

    render(){
        return <Component {...this.props} {...this.state} openArticle = {this.openArticle}/>
    }

    openArticle = id => ev => {
        let openFlag;
        if (this.state.openArticleID === id) {
            openFlag = !this.state.isOpen
        } else {
            openFlag = true;
        }

        this.setState({
            openArticleID: id,
            isOpen: openFlag
        })
    }
}