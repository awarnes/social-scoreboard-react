import React from 'react'
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
    wrapper = shallow(<ContestantRow
      contestant={mockContestant}
      decrementScore={mockDecrementScore}
      incrementScore={mockIncrementScore} />)
  })

  it('renders one Row in each ContestantRow', () => {
    expect(wrapper.find('Row').length).toBe(1)
  })

  it('renders two Col in each ContestantRow', () => {
    expect(wrapper.find('Col').length).toBe(2)
  })

  it('renders the name correctly', () => {
    expect(wrapper.find('.name').html()).toEqual('<div class="name col-xs-8">Apple</div>')
  })

  it('renders the score correctly', () => {
    expect(wrapper.find('.score').html()).toBe('<label class="score control-label">5</label>')
  })

  it('renders the buttons in the correct tds', () => {
    const incrementHtml = '<span class="increment input-group-btn"><button type="button" class="incrementButton btn btn-default">+</button></span>'
    const decrementHtml = '<span class="decrement input-group-btn"><button type="button" class="decrementButton btn btn-default">-</button></span>'
    console.log()
    expect(wrapper.find('.decrement').html()).toEqual(decrementHtml)
    expect(wrapper.find('.increment').html()).toEqual(incrementHtml)
  })

  it('calls the increment score callback when the button is clicked', () => {
    const incrementButton = wrapper.find('.incrementButton')

    incrementButton.simulate('click')

    expect(mockIncrementScore.mock.calls.length).toBe(1)
  })

  it('calls the decrement score callback when the button is clicked', () => {
    const decrementButton = wrapper.find('.decrementButton')

    decrementButton.simulate('click')

    expect(mockDecrementScore.mock.calls.length).toBe(1)
  })
})
