import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const store = configureStore(history);

ReactDOM.render(<Provider store={store}><Router history={history}/></Provider>, document.getElementById('root'));
registerServiceWorker();
