import React from 'react'

const AwardeesDetails = (props) => {
  return (
    <div className='inline'>
      <p className='display-6'>{props.awardee.firstname} {props.awardee.surname}</p>
      <p style={{fontSize:'1.3rem'}}>{props.awardee.motivation}</p>
    </div>
  )
}

export default AwardeesDetails
