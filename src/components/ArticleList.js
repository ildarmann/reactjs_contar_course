import React, {Component, PropTypes} from 'react'
import Article from './Article'
import accordionArticle from '../decorators/accordionArticle'

function ArticleList (props){

        const { articles, openArticleID, isOpen, openArticle } = props;

        const  articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == openArticleID && isOpen}
                    toggleOpen = {openArticle(article.id)}
                />
            </li>
        ));

        return (
            <ul>
                {articleItems}
            </ul>
        )
}


ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openArticleID: PropTypes.string ,
    isOpen: PropTypes.bool.isRequired,
    openArticle: PropTypes.func.isRequired
};


export default accordionArticle(ArticleList)