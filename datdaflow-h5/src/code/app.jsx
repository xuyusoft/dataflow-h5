'use strict'
import ReactDOM from 'react-dom';
import routers from './routers';
//require('../_app');

/*react touch事件插件*/
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(routers, document.getElementById('app'));