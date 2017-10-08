import React from 'react'
import ReactDOM from 'react-dom'
import ContestantRow from '../ContestantRow'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* global describe it beforeEach expect jest */

Enzyme.configure({ adapter: new Adapter() })

const mockIncrementScore = jest.fn()
const mockDecrementScore = jest.fn()

const mockContestant = {name: 'Apple', score: 5}

describe('ContestantRow', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ContestantRow contestant={mockContestant} />)
  })

  it('renders the ContestantRow correctly', () => {
    const tr = wrapper.find('tr')
    expect(tr.length).toBe(1)

    const td = wrapper.render().find('td')
    expect(td.length).toBe(4)
  })

  it('renders the name in the correct td', () => {
    expect(wrapper.find('.name').text()).toEqual('Apple')
  })

  it('renders the score in the correct td', () => {
    expect(wrapper.find('.score').text()).toBe('5')
  })

  it('renders the buttons in the correct tds', () => {
    expect(wrapper.find('.decrement').html()).toEqual('<td class="decrement"><button class="decrementButton">-</button></td>')
    expect(wrapper.find('.increment').html()).toEqual('<td class="increment"><button class="incrementButton">+</button></td>')
  })

  it('calls the increment score callback when the button is clicked', () => {
    // const incrementButton = wrapper.find('.incrementButton')

    wrapper.first('button').simulate('click')

    expect(mockIncrementScore.mock.calls.length).toBe(1)
  })

  it('calls the decrement score callback when the button is clicked', () => {
    const decrementButton = wrapper.find('.decrementButton')

    decrementButton.simulate('click')

    expect(mockDecrementScore.mock.calls.length).toBe(1)
  })
})
