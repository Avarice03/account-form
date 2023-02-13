import React from 'react'

function DisplayConfirmErrorMessage({confirmErrMessage}) {
  return (
    <small style={{color: "red"}}>{confirmErrMessage}</small>
  )
}

export default DisplayConfirmErrorMessage