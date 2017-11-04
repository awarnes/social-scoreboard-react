import React from 'react'
import CreateBoard from '../CreateBoard'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* global describe it beforeEach expect jest */

const mockProps = {
  contestantNames: '',
  updateBoardContestants: jest.fn(),
  boardTitle: '',
  updateBoardTitle: jest.fn()
}

Enzyme.configure({ adapter: new Adapter() })

describe('CreateBoard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CreateBoard {...mockProps} />)
  })

  it('renders 5 Rows', () => {
    expect(wrapper.find('Row').length).toBe(5)
  })

  it('renders 11 Cols', () => {
    expect(wrapper.find('Col').length).toBe(11)
  })

  it('renders 2 FormControls', () => {
    expect(wrapper.find('FormControl').length).toBe(2)
  })

  it('renders 2 Buttons', () => {
    expect(wrapper.find('Button').length).toBe(2)
  })

  it('performs the updateBoardTitle callback correctly', () => {
    expect(wrapper.find('#titleInput').props().value).toBe('')

    wrapper.find('#titleInput').simulate('change', {target: {value: 'Apple'}})

    expect(mockProps.updateBoardTitle.mock.calls.length).toBe(1)
  })

  it('performs the updateBoardTitle callback correctly', () => {
    expect(wrapper.find('#contestantInput').props().value).toBe('')

    wrapper.find('#contestantInput').simulate('change', {target: {value: 'Apple'}})

    expect(mockProps.updateBoardContestants.mock.calls.length).toBe(1)
  })
})
