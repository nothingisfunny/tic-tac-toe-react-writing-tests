import React from 'react'
import Game from './game'
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />);
});
