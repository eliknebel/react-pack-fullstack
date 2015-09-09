'use strict'

import React from 'react';

export default class Component extends React.Component {
	constructor(...args) {
		super(args);
		
		/** Bind event handler functions to component */
		let handlerNames = this.parseHandlerNames(this.__proto__);
		
		for (var hName in handlerNames) {
			/** Bind function to this object if it is a handler method */
			if (handlerNames.hasOwnProperty(hName)) {
				this[handlerNames[hName]] = this[handlerNames[hName]].bind(this);
			}
		}
	}
	
	/** Find all event handler function names that have a 'on' or 'handle' prefix */
	parseHandlerNames(object) {
		let handlerNames = Object.getOwnPropertyNames(object).filter(function(property) {
			return typeof object[property] === 'function';
		}).filter(function(method) {
			return (method.substring(0,2) === 'on' || method.substring(0,2) === 'handle');
		});
		
		return handlerNames;
	}
};
