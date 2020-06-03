import React, { Component } from 'react'
//import B from './B'
import PropTypes from 'prop-types'
export default class A extends Component {
    static PropTypes={
        rebder:PropTypes.func.isRequired
    }
    state={
        count:1
    }
    render() {
        return (
            <div>
              A... 
             {this.props.render=(this.state.count)}
            </div>
        )
    }
}
