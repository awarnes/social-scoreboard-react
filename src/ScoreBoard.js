import React, { Component } from 'react'
import ContestantRow from './ContestantRow'

class ScoreBoard extends Component {
  render () {
    const rows = this.props.contestants.map((name) => {
      // name (down) Score (up)
    })
    return (
      <div>
        <h4>{this.props.boardTitle}</h4>
        <p>Change all: </p>
        <button>-</button>
        <button>+</button>
        {rows}
        <button>Clear</button>
        <button>Options</button>
      </div>
    )
  }
}

export default ScoreBoard
