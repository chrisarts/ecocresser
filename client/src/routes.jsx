import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import BlogGrid from './components/blog/BlogGrid';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ReactGA from 'react-ga';

//Admin
import requireAuth from './utils/requireAuth';
import LoginPage from './components/admin/login/LoginPage';
import AdminHome from './components/admin/Home';
import CreateArticle from './components/admin/articles/CreateArticle';

import Admin from './components/admin/Admin';


//Google Analytics
ReactGA.initialize('UA-93467599-1');
function logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default (
    <Router history={browserHistory} onUpdate={logPageView}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/blog" component={BlogGrid}/>
            <Route path="/nosotros" component={About}/>
            <Route path="/contacto" component={Contact}/>
        </Route>

        <Route path="/cresser-admin" component={Admin}>
            <Route path="/cresser-admin/login" component={LoginPage}/>
            <Route path="/cresser-admin/home" component={requireAuth(AdminHome)}/>
            <Route path="/cresser-admin/articles/create" component={requireAuth(CreateArticle)}/>
        </Route>
    </Router>
)