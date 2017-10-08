import React, { Component } from 'react'

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
          value={this.props.boardContestants}
          onChange={this.props.updateBoardContestants}
        />
        <br/>
        <button id='createButton' onClick={() => { console.log('hello!') }}>Create Board</button>
        <p>{this.props.boardContestants}</p>
      </div>
    )
  }
}

export default CreateBoard
