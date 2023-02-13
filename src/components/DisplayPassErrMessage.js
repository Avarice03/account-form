import React from 'react'

function DisplayPassErrMessage({passErrMessage}) {
  return (
    <small style={{color: "red"}}>{passErrMessage}</small>
  )
}

export default DisplayPassErrMessage