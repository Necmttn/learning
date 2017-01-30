import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { droneInfo } from './selector'

class Drone extends Component {
  render(){
    return (
      <div>
        <h1>Drone</h1>
        <p>Engine Status: {(this.props.drone.engine)? 'working': 'stopped'} </p>
        <p> Speed: {this.props.drone.speed} </p>
        <p> Angle: {this.props.drone.angle} </p>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  drone: droneInfo(),
})

export default connect(mapStateToProps)(Drone) 