import React from 'react'
import Board from './board'
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  let squares = Array(9).fill(null)
  shallow(<Board squares={squares}/>);
});