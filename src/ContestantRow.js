import React, { Component } from 'react'

class ContestantRow extends Component {
  render () {
    return (
      <tr>
        <td className='name'>{this.props.contestant.name}</td>
        <td className='decrement'><button className='decrementButton' onClick={() => { this.props.decrementScore(this.props.contestant.name) }}>-</button></td>
        <td className='score'>{this.props.contestant.score}</td>
        <td className='increment'><button className='incrementButton' onClick={() => { this.props.incrementScore(this.props.contestant.name) }}>+</button></td>
      </tr>
    )
  }
}

export default ContestantRow
