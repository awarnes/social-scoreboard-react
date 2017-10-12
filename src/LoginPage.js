import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, Row, Col } from 'react-bootstrap'

class LoginPage extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col xs={0} sm={2} md={3} />
          <Col xs={12} sm={8} md={6}>
            <h1>Welcome to Social Scoreboard!</h1>
            <h3>Please login below.</h3>
          </Col>
          <Col xs={0} sm={2} md={3} />
        </Row>
        <Row>
          <Col xs={0} sm={2} md={3} />
          <Col xs={12} sm={8} md={6}>
            <Button type='button' onClick={this.props.login}>Login with Google</Button>
          </Col>
          <Col xs={0} sm={2} md={3} />
        </Row>
      </div>
    )
  }
}

export default LoginPage

LoginPage.propTypes = {
  login: PropTypes.func
}
