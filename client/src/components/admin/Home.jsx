import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { getArticleList } from '../../actions/articleActions';
import  dateFormat from 'dateformat';

import Navigation from './Navigation';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        let This = this;
        this.props.getArticleList().then(result => {
            This.setState({
                articles: result.data.articles
            });
        })
    }

    render(){
        return(
            <div>
                <Navigation/>
                <div className="admin-page">
                    <AppBar
                        title="Panel de Administración"
                    />
                    <h1>Lista de Artículos</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Titulo</TableHeaderColumn>
                                <TableHeaderColumn>Categoría</TableHeaderColumn>
                                <TableHeaderColumn>Fecha</TableHeaderColumn>
                                <TableHeaderColumn>Estado</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                this.state.articles.map(article =>
                                    <TableRow key={article.id}>
                                        <TableRowColumn>{article.id}</TableRowColumn>
                                        <TableRowColumn>{article.title}</TableRowColumn>
                                        <TableRowColumn>{article.category.replace(/-/g, ' ')}</TableRowColumn>
                                        <TableRowColumn>{dateFormat(article.created_at, "dddd, mmmm dS, yyyy")}</TableRowColumn>
                                        <TableRowColumn>{article.active ? 'Activo' : 'Inactivo'}</TableRowColumn>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

Home.PropTypes = {
    getArticleList: React.PropTypes.func.isRequired
};

export default connect(null, { getArticleList })(Home);