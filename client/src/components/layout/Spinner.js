import React from 'react'
import Spinner from './spinner.gif'

export default () => {
  return (
    <>
      <img
        src={Spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt='loading...'
      />
    </>
  )
}
