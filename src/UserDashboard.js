import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'

class UserDashboard extends Component {
  constructor (props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
    this.handleCreateBoard = this.handleCreateBoard.bind(this)
    this.handleDeleteBoard = this.handleDeleteBoard.bind(this)
  }

  async handleLogout () {
    await this.props.logout()
    return this.props.history.push(`/`)
  }

  async handleCreateBoard () {
    return this.props.history.push('/createboard')
  }

  handleDeleteBoard (boardId) {
    this.props.deleteScoreBoard(boardId)
  }

  render () {
    let boardList
    if (this.props.userBoards) {
      boardList = this.props.userBoards.map((board) => {
        return <ListGroupItem key={board.boardKey} href={`/board/${board.boardKey}`}>
          <Row>
            <Col xs={10}>
              {board.boardTitle}
            </Col>
            <Col xs={2}>
              <Button type='button' onClick={(evt) => { evt.preventDefault(); this.handleDeleteBoard(board.boardKey) }} className='text-right'>Delete</Button>
            </Col>
          </Row>
        </ListGroupItem>
      })
    } else {
      boardList = [<h4>It appears that you haven't created any boards yet.</h4>, <h4>Click 'Create Board' below to make a new one!</h4>]
    }

    return (
      <div>
        <Row>
          <Col xs={0} sm={2} md={3} />
          <Col xs={12} sm={8} md={6}>
            <h1>Welcome, {this.props.userName}!</h1>
          </Col>
          <Col xs={0} sm={2} md={3} />
        </Row>
        <Row>
          <Col xs={0} sm={2} md={3} />
          <Col xs={12} sm={8} md={6}>
            <ListGroup>
              {boardList}
            </ListGroup>
          </Col>
          <Col xs={0} sm={2} md={3} />
        </Row>
        <Row>
          <Col xs={0} sm={2} md={3} />
          <Col xs={12} sm={8} md={6}>
            <Button type='button' onClick={this.handleCreateBoard}>Create Board</Button>
            <Button type='button' onClick={this.handleLogout}>Logout of Social Scoreboard</Button>
          </Col>
          <Col xs={0} sm={2} md={3} />
        </Row>
      </div>
    )
  }
}

export default UserDashboard

UserDashboard.propTypes = {
  userName: PropTypes.string,
  userBoards: PropTypes.array,
  deleteScoreBoard: PropTypes.func,
  history: PropTypes.object
}
