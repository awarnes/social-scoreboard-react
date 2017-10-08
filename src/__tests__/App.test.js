import React from 'react'
import App from '../App'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* global describe it beforeEach expect */

Enzyme.configure({ adapter: new Adapter() })

const mockBoardContestants = [
  {name: 'Johnny', score: 0},
  {name: 'Apple', score: 0},
  {name: 'Seed', score: 0}
]

describe('App', () => {
  let wrapper, app

  beforeEach(() => {
    wrapper = shallow(<App />)
    app = wrapper.instance()
  })

  it('updates boardTitle when updateBoardTitle is called', () => {
    expect(wrapper.state().boardTitle).toBe('')

    app.updateBoardTitle({target: {value: 'Apple'}})

    expect(wrapper.state().boardTitle).toBe('Apple')
  })

  it('updates boardContestants and contestantNames when updateBoardContestants is called', () => {
    expect(wrapper.state().contestantNames).toBe('')
    expect(wrapper.state().boardContestants).toBe([])

    app.updateBoardContestants({target: {value: 'Johnny, Apple, Seed'}})

    expect(wrapper.state().contestantNames).toBe('Johnny, Apple, Seed')

    expect(wrapper.state().boardContestants).toBe(mockBoardContestants)
  })

  it('increments the score of a contestant when incrementScore is called', () => {
    wrapper.setState({boardContestants: mockBoardContestants})

    app.incrementScore('Johnny')

    expect(wrapper.state().boardContestants[0].score).toBe(1)
  })

  it('decrements the score of a contestant when decrementScore is called', () => {
    wrapper.setState({boardContestants: mockBoardContestants})

    app.decrementScore('Johnny')

    expect(wrapper.state().boardContestants[0].score).toBe(-1)
  })

  it('decrements the score of all contestants when decrementAll is called', () => {
    wrapper.setState({boardContestants: mockBoardContestants})

    app.decrementAll()

    wrapper.state().boardContestants.forEach((contestant) => {
      expect(contestant.score).toBe(-1)
    })
  })

  it('increments the score of a contestant when incrementAll is called', () => {
    wrapper.setState({boardContestants: mockBoardContestants})

    app.incrementAll()

    wrapper.state().boardContestants.forEach((contestant) => {
      expect(contestant.score).toBe(1)
    })
  })

  it('clears the score of a contestant when clearAll is called', () => {
    wrapper.setState({boardContestants: [{name: 'apple', score: 12}, {name: 'john', score: -1}]})

    app.clearAll()

    wrapper.state().boardContestants.forEach((contestant) => {
      expect(contestant.score).toBe(0)
    })
  })
})
