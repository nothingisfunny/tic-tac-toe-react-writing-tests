import React from 'react'
import Game from './game'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />);
});

it('renders game status correctly', () => {
  const wrapper = mount(<Game/>)
  const firstPlayer = wrapper.find('div.game-info').children().first().text()
  expect(firstPlayer).toEqual('Next player: X')

  const button = wrapper.find('button.square').first()
  button.simulate('click')
  const secondPlayer = wrapper.find('div.game-info').children().first().text()
  expect(secondPlayer).toEqual('Next player: O')

})