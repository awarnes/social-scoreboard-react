import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import CreateBoard from './CreateBoard'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      boardTitle: '',
      boardContestants: []
    }

    this.updateBoardTitle = this.updateBoardTitle.bind(this)
    this.updateBoardContestants = this.updateBoardContestants.bind(this)
  }

  updateBoardTitle (e) {
    this.setState({boardTitle: e.target.value})
  }

  updateBoardContestants (e) {
    this.setState({boardContestants: e.target.value.split(',')})
  }

  render () {
    return (
      <Router>
        <Route exact path='/'
          render={props => (<CreateBoard {...props}
            updateBoardTitle={this.updateBoardTitle}
            updateBoardContestants={this.updateBoardContestants}
            boardTitle={this.state.boardTitle}
            boardContestants={this.state.boardContestants}
          />)} />
      </Router>
    )
  }
}

export default App
