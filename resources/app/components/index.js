import React from  'react';
import ReactDOM from 'react-dom';
import {ENV} from "../common/constants";
import {BrowserRouter, Route} from 'react-router-dom';
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

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter >
                <Route path={`${ENV}`} component={Menu} />
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('app'));
