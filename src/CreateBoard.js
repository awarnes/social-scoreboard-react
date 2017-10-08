import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CreateBoard extends Component {
  render () {
    return (
      <div>
        <h1>Create a ScoreBoard!</h1>
        <label id='titleLabel' htmlFor='titleInput'>Scoreboard Title:</label>
        <input
          type='text'
          id='titleInput'
          value={this.props.boardTitle}
          onChange={this.props.updateBoardTitle}
        />
        <br/>
        <label id='peopleLabel' htmlFor='contestantInput'>Contestants:</label>
        <input
          type='text'
          id='contestantInput'
          value={this.props.contestantNames}
          onChange={this.props.updateBoardContestants}
        />
        <br/>
        <button type='button' onClick={e => e.preventDefault()}><Link to={`/board`}>Create Board</Link></button>
      </div>
    )
  }
}

export default CreateBoard
