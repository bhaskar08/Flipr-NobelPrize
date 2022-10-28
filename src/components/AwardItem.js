import React from 'react'
import AwardeesDetails from './AwardeesDetails';

const AwardItem = (props) => {
    const {laureates}=props;
    // Iterating all the elements of Every Laureates
  return (
    <div>
        {laureates.map((ele)=>{
            return <AwardeesDetails key={ele.id} awardee={ele}/>
        })}
    </div>
  )
}

export default AwardItem
