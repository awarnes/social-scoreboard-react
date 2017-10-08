import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Well } from 'react-bootstrap'

import './App.css'
import CreateBoard from './CreateBoard'
import ScoreBoard from './ScoreBoard'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      boardTitle: '',
      contestantNames: '',
      boardContestants: []
    }

    this.updateBoardTitle = this.updateBoardTitle.bind(this)
    this.updateBoardContestants = this.updateBoardContestants.bind(this)
    this.incrementScore = this.incrementScore.bind(this)
    this.decrementScore = this.decrementScore.bind(this)
    this.incrementAll = this.incrementAll.bind(this)
    this.decrementAll = this.decrementAll.bind(this)
    this.clearAll = this.clearAll.bind(this)
  }

  updateBoardTitle (evt) {
    this.setState({boardTitle: evt.target.value})
  }

  updateBoardContestants (evt) {
    const contestantNames = evt.target.value.split(',')

    const boardContestants = contestantNames.map((name) => {
      return {name: name.trim(), score: 0}
    })

    this.setState({boardContestants, contestantNames: evt.target.value})
  }

  incrementScore (incContestant) {
    const newBoardContestants = this.state.boardContestants.map(x => x)

    newBoardContestants.forEach((contestant) => {
      if (contestant.name === incContestant) {
        contestant.score += 1
      }
    })

    this.setState({boardContestants: newBoardContestants})
  }

  decrementScore (decContestant) {
    const newBoardContestants = this.state.boardContestants.map(x => x)

    newBoardContestants.forEach((contestant) => {
      if (contestant.name === decContestant) {
        contestant.score -= 1
      }
    })

    this.setState({boardContestants: newBoardContestants})
  }

  incrementAll () {
    const newBoardContestants = this.state.boardContestants.map(x => x)

    newBoardContestants.forEach((contestant) => {
      contestant.score += 1
    })

    this.setState({boardContestants: newBoardContestants})
  }

  decrementAll () {
    const newBoardContestants = this.state.boardContestants.map(x => x)

    newBoardContestants.forEach((contestant) => {
      contestant.score -= 1
    })

    this.setState({boardContestants: newBoardContestants})
  }

  clearAll () {
    const newBoardContestants = this.state.boardContestants.map(x => x)

    newBoardContestants.forEach((contestant) => {
      contestant.score = 0
    })

    this.setState({boardContestants: newBoardContestants})
  }

  render () {
    return (
      <Well>
        <Router>
          <div>
            <Route exact path='/'
              render={props => (<CreateBoard {...props}
                updateBoardTitle={this.updateBoardTitle}
                updateBoardContestants={this.updateBoardContestants}
                boardTitle={this.state.boardTitle}
                contestantNames={this.state.contestantNames}
                boardContestants={this.state.boardContestants}
              />)} />
            <Route path='/board'
              render={props => (<ScoreBoard {...props}
                boardTitle={this.state.boardTitle}
                boardContestants={this.state.boardContestants}
                incrementScore={this.incrementScore}
                decrementScore={this.decrementScore}
                incrementAll={this.incrementAll}
                decrementAll={this.decrementAll}
                clearAll={this.clearAll}
              />)} />
          </div>
        </Router>
      </Well>
    )
  }
}

export default App
