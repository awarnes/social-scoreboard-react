import React from 'react'
import CreateBoard from '../CreateBoard'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* global describe it beforeEach expect jest */

Enzyme.configure({ adapter: new Adapter() })

describe('CreateBoard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CreateBoard />)
  })

  it('', () => {
    expect(true).toBe(true)
  })
})
