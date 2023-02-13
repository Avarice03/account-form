import React from 'react'

function DisplayUserErrMessage({userErrMessage}) {
  return (
    <small style={{color: "red"}}>{userErrMessage}</small>
  )
}

export default DisplayUserErrMessage