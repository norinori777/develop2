import React from 'react'
import {render} from 'react-dom'
import Main from './jsx/components/main.js'
import HellowWorld from './jsx/container/HelloWorld.js'
import HellowWorld1 from './jsx/container/HelloWorld1.js'
import HellowWorld2 from './jsx/container/HelloWorld2.js'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/main.js'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

const store = createStore(
	combineReducers({
		rootReducer,
		routing: routerReducer
	}))

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
	    <Router history={history}>
		    <Route path="/" component={Main}>
			    <IndexRoute component={HellowWorld} />
				<Route path="1" component={HellowWorld1} />
				<Route path="2" component={HellowWorld2} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('main')
)
