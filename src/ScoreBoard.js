import React, { Component } from 'react'
import ContestantRow from './ContestantRow'

class ScoreBoard extends Component {
  render () {
    const rows = this.props.boardContestants.map((contestant) => {
      return <ContestantRow
        contestant={contestant}
        decrementScore={this.props.decrementScore}
        incrementScore={this.props.incrementScore} />
    })

    return (
      <div>
        <h4>{this.props.boardTitle}</h4>
        <p>Change all: </p>
        <button onClick={this.props.decrementAll}>-</button>
        <button onClick={this.props.incrementAll}>+</button>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
        <button onClick={this.props.clearAll}>Clear</button>
        <button>Options</button>
      </div>
    )
  }
}

export default ScoreBoard
