import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, Well, Row, Col, ButtonGroup } from 'react-bootstrap'

import ContestantRow from './ContestantRow'

class ScoreBoard extends Component {
  componentWillMount () {
    this.props.updateScoreBoardFromDatabase(this.props.match.params.uid)
  }

  render () {
    const rows = this.props.boardInfo.boardContestants.map((contestant) => {
      return <ContestantRow
        key={contestant.name}
        contestant={contestant}
        decrementScore={this.props.decrementScore}
        incrementScore={this.props.incrementScore} />
    })

    return (
      <Row>
        <Col xs={0} sm={2} md={3} />
        <Col xs={12} sm={8} md={6}>
          <Row>
            <Col xs={0} sm={2} md={3} />
            <Col xs={12} sm={8} md={6}>
              <h1>{this.props.boardInfo.boardTitle}</h1>
            </Col>
            <Col xs={0} sm={2} md={3} />
          </Row>
          <Row>
            <Col xs={8}>
              <h4>Change all: </h4>
            </Col>
            <Col xs={2}>
              <Button id='decrementAll'onClick={this.props.decrementAll}>-</Button>
            </Col>
            <Col xs={2}>
              <Button id='incrementAll' onClick={this.props.incrementAll}>+</Button>
            </Col>
          </Row>
          <Well>
            {rows}
          </Well>
          <Row>
            <Col xs={3} md={4} />
            <Col xs={6} md={4}>
              <ButtonGroup>
                <Button id='clearAll' onClick={this.props.clearAll}>Clear</Button>
                <Button id='options'>Options</Button>
              </ButtonGroup>
            </Col>
            <Col xs={3} md={4} />
          </Row>
          <Row>
            <Col xs={3} md={4} />
            <Col xs={6} md={4}>
              <ButtonGroup>
                <Button id='returnHome' onClick={() => { this.props.history.push('/') }}>Return to Dashboard</Button>
              </ButtonGroup>
            </Col>
            <Col xs={3} md={4} />
          </Row>
        </Col>
        <Col xs={0} sm={2} md={3} />
      </Row>
    )
  }
}

ScoreBoard.propTypes = {
  boardInfo: PropTypes.object,
  decrementAll: PropTypes.func,
  incrementAll: PropTypes.func,
  decrementScore: PropTypes.func,
  incrementScore: PropTypes.func,
  clearAll: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
  updateScoreBoardFromDatabase: PropTypes.func
}

export default ScoreBoard
