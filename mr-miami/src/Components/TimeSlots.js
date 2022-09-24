import React from 'react';

const time = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM',
    '7:00 PM', '8:00 PM', '9:00 PM'
  ]

const TimeSlots = (props) => {
  return (
    <>
       {time.map((times,index) => {
              return (
                  <div key={index}>
                    {/*If this button is clicked render data as a modal*/}
                    <button className='Close' onClick={props.refreshPage}> X </button>
                    <button onClick={(e) => props.displayInfo(e)}> {times} </button>
                  </div>
              )
            })}
    </>
  )
}

export default TimeSlots