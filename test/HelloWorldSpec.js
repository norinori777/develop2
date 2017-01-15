import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import {connect,Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import rootReducer from '../develop/assets/js/redux/reducers/main.js'
import HelloWorld from '../develop/assets/js/jsx/container/HelloWorld.js'

describe("HelloWorld",function(){
	let myComponent

	const store = createStore(combineReducers({
		rootReducer,
		routing: routerReducer
	}))
	
	it('should render',function(){
		myComponent = TestUtils.renderIntoDocument(<Provider store={store}>
														<HelloWorld />
													</Provider>)
		expect(ReactDOM.findDOMNode(myComponent)).toBeDefined()
		console.dir(myComponent.props)
		//expect(ReactDOM.findDOMNode(myComponent.props.rootReducer.name)).toBe("NORI")
	});
});
