import React, { Component } from 'react'
import spinner from './spinner.gif'

const Spinner=()=> {
  
    return (
      <div>
        <div className='text-center'>
            <img className="my-3" src={spinner} alt="" />
            </div>
      </div>
    )
  }
export default Spinner;
