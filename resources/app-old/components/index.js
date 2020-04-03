import React from  'react';
import ReactDOM from 'react-dom';
import {ENV} from "../common/constants";
import {BrowserRouter, Route} from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import Loadable from 'react-loadable';
import Loading from "../common/loadingWhite";

const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading
});

const Register = Loadable({
    loader: () => import('./register'),
    loading: Loading
});

const Menu = Loadable({
    loader: () => import('./menu'),
    loading: Loading
});

ReactDOM.render(
    (
    <BrowserRouter >
    <Route exact={true} path={`${ENV}signin`} component={Login} />
    <Route exact={true} path={`${ENV}signup`} component={Register} />
<Route path={`${ENV}app`} component={Menu} />
</BrowserRouter>
),
document.getElementById('app'));