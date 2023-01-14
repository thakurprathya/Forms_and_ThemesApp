import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"50px"}}> {/*adding it inside a div to prevent content shifting, as before using it contents shifts whenever alert shows */}
      {props.alert && <div>
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{props.alert.heading}</strong>  {props.alert.message}
          </div>
      </div>}
    </div>
  )
}