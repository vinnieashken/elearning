import React from  'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import Loadable from 'react-loadable';
import Loading from "../common/loadingWhite";

import { Provider } from 'react-redux'
import store from '../common/store'


const Menu = Loadable({
    loader: () => import('./menu'),
    loading: Loading
});

const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading
})

const Register = Loadable({
    loader: () => import('./register'),
    loading: Loading
})

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter >
                <Route path='/academy'>
                    <React.Fragment>
                        <Switch>
                            <Route
                                path={`/academy/login`}
                                component={Login}
                                exact={true}
                            />
                            <Route
                                path={`/academy/register`}
                                component={Register}
                                exact={true}
                            />
                            <Route
                                path='/academy'
                                component={Menu}
                            />
                        </Switch>
                    </React.Fragment>
                </Route>
                {/*<Route exact={true} path={`/academy/login`} component={Login} />*/}
                {/*<Route exact={true} path={`/academy/register`} component={Register} />*/}
                {/*<Route exact={true} path={`/academy`} component={Menu} />*/}
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('app'));
