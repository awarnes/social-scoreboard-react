import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import { Well } from 'react-bootstrap'
import fire, { auth, provider } from './firebaseConfig'

import './App.css'
import CreateBoard from './CreateBoard'
import ScoreBoard from './ScoreBoard'
import LoginPage from './LoginPage'
import UserDashboard from './UserDashboard'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contestantNames: '',
      boardInfo: {
        boardTitle: '',
        boardContestants: []
      },
      activeBoardId: '',
      user: null,
      userName: ''
    }

    this.updateBoardTitle = this.updateBoardTitle.bind(this)
    this.updateBoardContestants = this.updateBoardContestants.bind(this)
    this.incrementScore = this.incrementScore.bind(this)
    this.decrementScore = this.decrementScore.bind(this)
    this.incrementAll = this.incrementAll.bind(this)
    this.decrementAll = this.decrementAll.bind(this)
    this.clearAll = this.clearAll.bind(this)
    this.createNewBoard = this.createNewBoard.bind(this)
    this.updateScoreBoardFromDatabase = this.updateScoreBoardFromDatabase.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.getUserInformation = this.getUserInformation.bind(this)
  }

  componentDidMount () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user, userName: user.displayName }, () => { this.getUserInformation() })
      }
    })
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
    const newBoardInfo = Object.assign({}, this.state.boardInfo)

    newBoardInfo.boardContestants.forEach((contestant) => {
      if (contestant.name === incContestant) {
        contestant.score += 1
      }
    })

    this.setState({boardInfo: newBoardInfo}, () => { this.updateScoresInDatabase() })
  }

  decrementScore (decContestant) {
    const newBoardInfo = Object.assign({}, this.state.boardInfo)

    newBoardInfo.boardContestants.forEach((contestant) => {
      if (contestant.name === decContestant) {
        contestant.score -= 1
      }
    })

    this.setState({boardInfo: newBoardInfo}, () => { this.updateScoresInDatabase() })
  }

  incrementAll () {
    const newBoardInfo = Object.assign({}, this.state.boardInfo)

    newBoardInfo.boardContestants.forEach((contestant) => {
      contestant.score += 1
    })

    this.setState({boardInfo: newBoardInfo}, () => { this.updateScoresInDatabase() })
  }

  decrementAll () {
    const newBoardInfo = Object.assign({}, this.state.boardInfo)

    newBoardInfo.boardContestants.forEach((contestant) => {
      contestant.score -= 1
    })

    this.setState({boardInfo: newBoardInfo}, () => { this.updateScoresInDatabase() })
  }

  clearAll () {
    const newBoardInfo = Object.assign({}, this.state.boardInfo)

    newBoardInfo.boardContestants.forEach((contestant) => {
      contestant.score = 0
    })

    this.setState({boardInfo: newBoardInfo}, () => { this.updateScoresInDatabase() })
  }

  updateScoresInDatabase () {
    if (this.state.activeBoardId !== '') {
      const boardInfoRef = fire.database().ref(`boards/${this.state.activeBoardId}`)
      boardInfoRef.set(this.state.boardInfo)
    }
  }

  createNewBoard () {
    const boardsRef = fire.database().ref('boards')
    boardsRef.push(this.state.boardInfo)
    boardsRef.once('child_added')
      .then((dataSnapshot) => {
        this.setState({activeBoardId: dataSnapshot.key})
      })
  }

  updateScoreBoardFromDatabase (boardUid) {
    const boardInfoRef = fire.database().ref(`boards/${boardUid}`)
    boardInfoRef.once('value')
      .then((snapshot) => {
        let boardInfo = snapshot.val()
        this.setState({boardInfo, activeBoardId: boardUid})
      })
  }

  getUserInformation () {
    const userRef = fire.database().ref(`users/${this.state.user.uid}`)
    userRef.once('child_added')
      .then((snapshot) => {
        console.log(snapshot)
      })
  }

  createUser () {
    const userRef = fire.database().ref(`users/${this.state.user.uid}`)
    userRef.once('value')
      .then((dataSnapshot) => {
        console.log('dataSnapshot', dataSnapshot)
        if (!dataSnapshot.exists()) {
          console.log('dataSnapshot.key', dataSnapshot.key)
        }
      })
  }

  login () {
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log('result', result)
        const user = result.user
        console.log('user', user)
        this.setState({user}, () => { this.createUser() })
      })
  }

  logout () {
    auth.signOut()
      .then(() => {
        this.setState({user: null})
      })
  }

  render () {
    return (
      <Well>
        <Router>
          <div>
            <Route exact path='/'
              render={(props) =>
                (this.state.user ? (<Redirect to={`/${this.state.user.uid}/dashboard`} />)
                  : (<LoginPage {...props}
                    login={this.login}
                  />))} />

            <Route path={`/:uid/dashboard`}
              render={props => (<UserDashboard {...props}
                logout={this.logout}
                userName={this.state.userName}
              />)} />

            <Route path='/createboard'
              render={props => (<CreateBoard {...props}
                updateBoardTitle={this.updateBoardTitle}
                updateBoardContestants={this.updateBoardContestants}
                boardTitle={this.state.boardInfo.boardTitle}
                contestantNames={this.state.contestantNames}
                boardContestants={this.state.boardInfo.boardContestants}
                createNewBoard={this.createNewBoard}
                activeBoardId={this.state.activeBoardId}
              />)} />
            <Route path='/board/:uid'
              render={props => (<ScoreBoard {...props}
                updateScoreBoardFromDatabase={this.updateScoreBoardFromDatabase}
                boardInfo={this.state.boardInfo}
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
