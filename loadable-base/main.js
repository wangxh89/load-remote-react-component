import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

import './main.css';

/**
 * 
 * 
 * @class Button
 * @extends {Component}
 */
class Button extends Component {
  render() {
    return <div>Hello,Webpack1</div>
  }
}

export const MyComponentLib = {
    Button
 };

// render(<Button/>, window.document.getElementById('app'));