import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { FormGroup, FormControl, ControlLabel, Button, Row, Col, HelpBlock } from 'react-bootstrap'

class CreateBoard extends Component {
  render () {
    return (
      <Row>
        <Col xs='3' />
        <Col xs='6'>
          <Row>
            <Col xs='1' />
            <Col xs='10'>
              <h1>Create a ScoreBoard!</h1>
            </Col>
            <Col xs='1' />
          </Row>
          <Row>
            <Col xs='12'>
              <FormGroup>
                <ControlLabel id='titleLabel' htmlFor='titleInput'>Scoreboard Title:</ControlLabel>
                <FormControl
                  type='text'
                  id='titleInput'
                  value={this.props.boardTitle}
                  onChange={this.props.updateBoardTitle}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs='12'>
              <FormGroup>
                <ControlLabel id='peopleLabel' htmlFor='contestantInput'>Contestants:</ControlLabel>
                <FormControl
                  type='text'
                  id='contestantInput'
                  value={this.props.contestantNames}
                  onChange={this.props.updateBoardContestants}
                />
                <HelpBlock>Please enter a comma seperated list.</HelpBlock>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs='4' />
            <Col xs='4'>
              <br />
              <Button type='button' onClick={e => e.preventDefault()}><Link to={`/board`}>Create Board</Link></Button>
            </Col>
            <Col xs='4' />
          </Row>
        </Col>
        <Col xs='3' />
      </Row>
    )
  }
}

CreateBoard.propTypes = {
  boardTitle: PropTypes.string,
  updateBoardTitle: PropTypes.func,
  contestantNames: PropTypes.string,
  updateBoardContestants: PropTypes.func
}

export default CreateBoard
