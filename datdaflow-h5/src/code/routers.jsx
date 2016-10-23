'use strict';

import React,{PropTypes} from 'react';
import { Router, IndexRoute,IndexRedirect ,Route,browserHistory  } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import PersonalRouter from './personal/routers';
// 模板页
import Share from './share/share';
// 欢迎页
import Welcome from './welcome/welcome';
// 资讯
import News from './news/news';
// 充值
import Recharge from './recharge/recharge';
// 查询
import Query from './query/query';
// 认证
import Identity from './identity/identity';
// 404错误页
import NotFound from './notfound/notfound';
import Reducers from './reducers'

window.store = createStore(Reducers, window.devToolsExtension && window.devToolsExtension());

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, window.store)

const routers = (
        <Provider store={store}>
        <Router history={history}>
            <Route path="/:app" component={Share}>
                <IndexRoute component={Welcome} />
                <Route path="news" component={News} />
                <Route path="recharge" component={Recharge} />
                <Route path="query" component={Query} />
                <Route path="identity" component={Identity} />
                {PersonalRouter}
                <Route path="*" component={NotFound} />
            </Route>
            <Route path="*" component={Welcome} />
        </Router>
    </Provider>
    );
export default routers;