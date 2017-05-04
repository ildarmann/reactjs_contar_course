import React from 'react'

export default (Component) => class AccordionDecorator extends React.Component{

    state = {
        openItemID: null,
    };

    render(){
        return <Component {...this.props} {...this.state} checkIsOpen = {this.checkIsOpen} toogleOpenItem = {this.toogleOpenItem}/>
    }

    checkIsOpen = id => id == this.state.openItemID

    toogleOpenItem = id => ev => {
        this.setState({
            openItemID: this.state.openItemID === id ? null : id
        })
    }
}