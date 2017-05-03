import React, {Component, PropTypes} from 'react'
import Article from './Article'

class ArticleList extends Component{
    state = {
        openArticleID: null
    }

    render() {
        const { articles } = this.props;

        const  articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == this.state.openArticleID}
                    toggleOpen = {this.openArticle(article.id)}
                />
            </li>
        ));

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

    openArticle = id => ev => {
        this.setState({
            openArticleID: id
        })
    }
}


ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}


export default ArticleList