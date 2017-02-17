import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { 
  engineStart,
  engineStop,
  incAltitude,
  decAltitude,
  moveBackward,
  moveForward,
  moveLeft,
  moveRight,
  rotateLeft,
  rotateRight } from '../Drone/actions'
import {Layer, Stage} from 'react-konva'
import Drone from '../Drone/'
import { droneInfo } from '../Drone/selector'
class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>this is  {this.props.count} HomePage</h1>
        <button onClick={this.props.droneStart}>Drone Start</button>
        <button onClick={this.props.droneStop}>Drone Stop</button>
        <button onClick={this.props.incAltitude}>INCLINE</button>
        <button onClick={this.props.decAltitude}>DECLINE</button>
        <button onClick={this.props.moveForward}>🔼</button>
        <button onClick={this.props.moveLeft}>⬅️</button>
        <button onClick={this.props.moveRight}>➡️</button>
        <button onClick={this.props.moveBackward}>🔽</button>
        <button onClick={this.props.rotateRight}>↩️</button>
        <button onClick={this.props.rotateLeft}>↪️</button>
        <p>X: {this.props.drone.locationX}</p>
        <p>Y: {this.props.drone.locationY}</p>
        <p>Z: {this.props.drone.locationZ}</p>
        <Stage width={700} height={700} style={{backgroundColor: 'black'}}>
          <Layer>
              <Drone/>
          </Layer>
        </Stage>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    decAltitude: () => {
      dispatch(decAltitude())
    },
    incAltitude: () => {
      dispatch(incAltitude())
    },
    moveForward: () => {
      dispatch(moveForward())
    },
    moveBackward: () => {
      dispatch(moveBackward())
    },
    moveLeft: () => {
      dispatch(moveLeft())
    },
    moveRight: () => {
      dispatch(moveRight())
    },
    rotateLeft: () => {
      dispatch(rotateLeft())
    },
    rotateRight: () => {
      dispatch(rotateRight())
    },
    droneStart: () => {
      dispatch(engineStart())
    },
    droneStop: () => {
      dispatch(engineStop())
    }
  }
}

const mapStateToProps = createStructuredSelector({
  drone: droneInfo(),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)