import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom'

import { FormGroup, FormControl, ControlLabel, Button, Row, Col, HelpBlock } from 'react-bootstrap'

class CreateBoard extends Component {
  constructor (props) {
    super(props)

    this.handleCreateNewBoard = this.handleCreateNewBoard.bind(this)
  }

  async handleCreateNewBoard () {
    await this.props.createNewBoard()
    return this.props.history.push(`/board/${this.props.activeBoardId}`)
  }

  render () {
    return (
      <Row>
        <Col xs={3} />
        <Col xs={6}>
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              <h1>Create a ScoreBoard!</h1>
            </Col>
            <Col xs={1} />
          </Row>
          <Row>
            <Col xs={12}>
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
            <Col xs={12}>
              <FormGroup>
                <ControlLabel id='contestantLabel' htmlFor='contestantInput'>Contestants:</ControlLabel>
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
            <Col xs={4} />
            <Col xs={4}>
              <Button type='button' onClick={this.handleCreateNewBoard}>Create Board</Button>
            </Col>
            <Col xs={4} />
          </Row>
        </Col>
        <Col xs={3} />
      </Row>
    )
  }
}

CreateBoard.propTypes = {
  boardTitle: PropTypes.string,
  updateBoardTitle: PropTypes.func,
  contestantNames: PropTypes.string,
  updateBoardContestants: PropTypes.func,
  // createNewBoard: PropTypes.func,
  activeBoardId: PropTypes.string
}

export default CreateBoard
