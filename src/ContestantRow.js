import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  FormGroup,
  InputGroup,
  ControlLabel,
  Row, Col } from 'react-bootstrap'

class ContestantRow extends Component {
  render () {
    const contestantName = this.props.contestant.name
    return (
      <Row>
        <Col className='name' xs={8}>{contestantName}</Col>
        <Col className='scoreGroup' xs={4}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Button className='decrement'>
                <Button className='decrementButton' onClick={() => { this.props.decrementScore(contestantName) }}>-</Button>
              </InputGroup.Button>
              <ControlLabel className='score'>{this.props.contestant.score}</ControlLabel>
              <InputGroup.Button className='increment'>
                <Button className='incrementButton' onClick={() => { this.props.incrementScore(contestantName) }}>+</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}

ContestantRow.propTypes = {
  contestant: PropTypes.object,
  decrementScore: PropTypes.func,
  incrementScore: PropTypes.func
}

export default ContestantRow
