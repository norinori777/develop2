import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import {connect,Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import rootReducer from '../develop/assets/js/redux/reducers/main.js'
import HelloWorld from '../develop/assets/js/jsx/container/HelloWorld.js'
import HelloWorld_Com from '../develop/assets/js/jsx/components/HelloWorld.js'

describe("HelloWorld", () => {
	let myComponent, store
	beforeEach(() => {
		store = createStore(combineReducers({
			rootReducer,
			routing: routerReducer
		}))
		myComponent = TestUtils.renderIntoDocument(<Provider store={store}>
														<HelloWorld />
												</Provider>)
	})

	it('should render',function(){
		expect(ReactDOM.findDOMNode(myComponent)).toBeDefined()
		//console.log(TestUtils.scryRenderedDOMComponentsWithTag(myComponent,'div'))
		console.dir(TestUtils.scryRenderedComponentsWithType(myComponent,Provider)[0].props)
		expect(TestUtils.findRenderedComponentWithType(myComponent,HelloWorld_Com).props.name).toEqual('NORI')
		console.log(TestUtils.findRenderedComponentWithType(myComponent,HelloWorld_Com).props)
		expect(TestUtils.findRenderedComponentWithType(myComponent,HelloWorld_Com).props.childname).toEqual('FUKA')		
		//console.log(store)
		//　どのComponentClassから作成したものか判定
		expect(TestUtils.isCompositeComponentWithType(myComponent,Provider)).toBeTruthy()
		//expect(TestUtils.scryRenderedDOMComponentsWithTag(myComponent,'div')).ttain('NORI')
	})
})
