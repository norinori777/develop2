import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import HelloWorld from '../develop/assets/js/jsx/HelloWorld.js'

describe("HelloWorld",function(){
	let myComponent
	
	it('should render',function(){
		myComponent = TestUtils.renderIntoDocument(<HelloWorld name='test'></HelloWorld>)
		expect(ReactDOM.findDOMNode(myComponent)).toBeDefined()
		//expect(ReactDOM.findDOMNode(myComponent.props.title)).toBe("test")
	});
});