import React from 'react'
import ScoreBoard from '../ScoreBoard'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* global describe it beforeEach expect jest */

Enzyme.configure({ adapter: new Adapter() })

describe('ScoreBoard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ScoreBoard />)
  })

  it('', () => {
    expect(true).toBe(true)
  })
})
