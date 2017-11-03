import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, Row, Col } from 'react-bootstrap'

class UserDashboard extends Component {
  componentWillMount () {

  }

  render () {
    // const boardList = this.props.userBoards.map((board) => {
    //   return <Button key={board.uid}>{board.name}</Button>
    // })
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
          hello
          </Col>
          <Col xs={0} sm={2} md={3} />
        </Row>
        <Row>
          <Col xs={0} sm={2} md={3} />
          <Col xs={12} sm={8} md={6}>
            <Button type='button' onClick={this.props.logout}>Logout of Social Scoreboard</Button>
          </Col>
          <Col xs={0} sm={2} md={3} />
        </Row>
      </div>
    )
  }
}

export default UserDashboard

UserDashboard.propTypes = {
  logout: PropTypes.func,
  userName: PropTypes.string,
  userBoards: PropTypes.array
}
