import React, {Component, PropTypes} from 'react'
import Article from './Article'
import accordionArticle from '../decorators/accordionArticle'

function ArticleList (props){

        const { articles, checkIsOpen, toogleOpenItem } = props;

        const  articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {checkIsOpen(article.id)}
                    toggleOpen = {toogleOpenItem(article.id)}
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
    checkIsOpen: PropTypes.func.isRequired,
    toogleOpenItem: PropTypes.func.isRequired
};


export default accordionArticle(ArticleList)