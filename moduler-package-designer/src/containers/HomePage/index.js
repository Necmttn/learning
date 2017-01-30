import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeSelectCount } from './selector'
import { createStructuredSelector } from 'reselect'
import { increase, decrease } from './actions'
import { engineStart, engineStop } from '../Drone/actions'
class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>this is  {this.props.count} HomePage</h1>
        <button onClick={this.props.increase}>+</button>
        <button onClick={this.props.decrease}>-</button>
        <button onClick={this.props.droneStart}>Drone Start</button>
        <button onClick={this.props.droneStop}>Drone Stop</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: () => {
      dispatch(increase())
    },
    decrease: () => {
      dispatch(decrease())
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
  count: makeSelectCount()
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)