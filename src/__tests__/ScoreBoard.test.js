import React from 'react'
import ScoreBoard from '../ScoreBoard'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* global describe it beforeEach expect jest */

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  decrementScore: jest.fn(),
  incrementScore: jest.fn(),
  incrementAll: jest.fn(),
  decrementAll: jest.fn(),
  clearAll: jest.fn(),
  boardContestants: [{name: 'apple', score: 0}],
  boardTitle: 'Apple'
}

describe('ScoreBoard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ScoreBoard {...mockProps} />)
  })

  it('renders 4 Rows', () => {
    expect(wrapper.find('Row').length).toBe(4)
  })

  it('renders 12 Cols', () => {
    expect(wrapper.find('Col').length).toBe(12)
  })

  it('renders the boardTitle correctly', () => {
    expect(wrapper.find('h1').text()).toBe('Apple')
  })

  it('performs the decrementAll callback when the button is pressed', () => {
    expect(mockProps.decrementAll.mock.calls.length).toBe(0)

    wrapper.find('#decrementAll').simulate('click')

    expect(mockProps.decrementAll.mock.calls.length).toBe(1)
  })

  it('performs the incrementAll callback when the button is pressed', () => {
    expect(mockProps.incrementAll.mock.calls.length).toBe(0)

    wrapper.find('#incrementAll').simulate('click')

    expect(mockProps.incrementAll.mock.calls.length).toBe(1)
  })

  it('performs the clearAll callback when the button is pressed', () => {
    expect(mockProps.clearAll.mock.calls.length).toBe(0)

    wrapper.find('#clearAll').simulate('click')

    expect(mockProps.clearAll.mock.calls.length).toBe(1)
  })

  it('creates the rows object correctly', () => {
    expect(wrapper.find('ContestantRow').length).toBe(1)
    expect(wrapper.find('ContestantRow').props().contestant.name).toBe('apple')
  })
})
