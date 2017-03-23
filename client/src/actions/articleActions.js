import axios from 'axios';


export function createArticle(article){
    return dispatch => {
        return axios.post('/api/articles/create', article)
    }
}

export function getArticleList(){
    return dispatch => {
        return axios.post('/api/articles/all')
    }
}

export function getArticleListLimit(limit) {
    return dispatch => {
        return axios.post('/api/articles/all/limit', limit)
    }
}