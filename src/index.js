import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduces from './reduces';
import 'antd/dist/antd.css';

import TicketList from './components/ticket-list'
import AssetList from './components/asset-list'

let store = createStore(reduces);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <div>Menu</div>
                <ul>
                    <li><Link to='/ticket-list'>Lista de Tickets</Link></li>
                    <li><Link to='/asset-list'>Lista de Bens</Link></li>
                </ul>

                <Route path='/ticket-list' component={TicketList} />
                <Route path='/asset-list' component={AssetList} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById("root")
)