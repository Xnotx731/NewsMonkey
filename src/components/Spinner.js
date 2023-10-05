import React, { Component } from 'react'
import spinner from './spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className='text-center'>
            <img className="my-3" src={spinner} alt="" />
            </div>
      </div>
    )
  }
}
