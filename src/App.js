import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Well } from 'react-bootstrap'

import './App.css'
import CreateBoard from './CreateBoard'
import ScoreBoard from './ScoreBoard'

/* global fetch */

const DATABASE_ROOT_URL = 'https://social-scoreboard.firebaseio.com'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contestantNames: '',
      boardInfo: {
        boardTitle: '',
        boardContestants: []
      },
      activeBoardId: ''
    }

    this.updateBoardTitle = this.updateBoardTitle.bind(this)
    this.updateBoardContestants = this.updateBoardContestants.bind(this)
    this.incrementScore = this.incrementScore.bind(this)
    this.decrementScore = this.decrementScore.bind(this)
    this.incrementAll = this.incrementAll.bind(this)
    this.decrementAll = this.decrementAll.bind(this)
    this.clearAll = this.clearAll.bind(this)
    this.createNewBoard = this.createNewBoard.bind(this)
  }

  updateBoardTitle (evt) {
    const newBoardInfo = Object.assign({}, this.state.boardInfo)
    newBoardInfo.boardTitle = evt.target.value
    this.setState({boardInfo: newBoardInfo})
  }

  updateBoardContestants (evt) {
    const contestantNames = evt.target.value.split(',')

    const newBoardInfo = Object.assign({}, this.state.boardInfo)

    const boardContestants = contestantNames.map((name) => {
      return {name: name.trim(), score: 0}
    })

    newBoardInfo.boardContestants = boardContestants

    this.setState({boardInfo: newBoardInfo, contestantNames: evt.target.value})
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

  createNewBoard () {
    const postData = {
      method: 'POST',
      body: JSON.stringify({boardInfo: this.state.boardInfo})
    }

    fetch(`${DATABASE_ROOT_URL}/boards.json`, postData)
      .then((response) => response.json())
      .then((boardUid) => {
        console.log(boardUid)
        this.setState({activeBoardId: boardUid.name})

        // let boardInfo = Object.assign({}, this.state.activeBoardInfo, {[boardUid.name]: this.state.boardTitle})
        // const putData = {
        //   method: 'PUT',
        //   body: JSON.stringify(boardInfo)
        // }
        // // assign the new board to each user that is a part of it ???? maybe have different to assign board to user when they are added to it...
        // return fetch(`${DATABASE_ROOT_URL}/boards/${this.state.activeBoardId}/users.json`, putData)
      })
      .catch((err) => { console.error(err) })
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
                boardTitle={this.state.boardInfo.boardTitle}
                contestantNames={this.state.contestantNames}
                boardContestants={this.state.boardInfo.boardContestants}
                createNewBoard={this.createNewBoard}
              />)} />
            <Route path='/board/{:id}'
              render={props => (<ScoreBoard {...props}
                boardTitle={this.state.boardInfo.boardTitle}
                boardContestants={this.state.boardInfo.boardContestants}
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
