import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { droneInfo } from './selector'
import {Rect} from 'react-konva';
import Konva from 'konva'

class Drone extends Component {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  }

  render() {
    return (
      <Rect
          x={this.props.drone.locationX} y={this.props.drone.locationY} width={50} height={50}
          fill={(this.props.drone.engine) ? 'green' : 'red'}
          shadoBlur={10}
          onClick={this.handleClick}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  drone: droneInfo(),
})

export default connect(mapStateToProps)(Drone) 