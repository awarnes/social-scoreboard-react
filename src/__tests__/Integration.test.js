import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import App from '../App'

/* global it describe expect */

describe('App', () => {
  it('renders according to the snapshot', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
})
