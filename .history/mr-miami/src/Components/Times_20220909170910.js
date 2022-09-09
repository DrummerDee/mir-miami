import React, { useState } from 'react';
import '../Styles/Times.css';


const time = [
  '09:00 AM','10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM',
  '7:00 PM', '8:00 PM', '9:00 PM'
]
function Times(props) {

  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);
  const [modal, setModal] = useState(false);
  
  


  // display the times for the selected date
  const displayInfo = (e) => {
    setInfo(true);
    setEvent(e.target.innerText);
  }
  // for modal to pop up when user clicks a date
  const toggleModal = () => {
    setModal(!modal);
  }


  //reload 
  const refreshPage = () => {
    window.location.reload(false);
  }

 
 
  return (
    <>
      <div className='Modal' id='modal'>
        <div onClick={toggleModal} className='Overlay'></div>
        <div className='Content'>
        </div>
        <div className="times Content">
          <div className='container'>
            {time.map(times => {
              return (
                <>
                  <div>
                    {/*If this button is clicked render data as a modal*/}
                    <button className='Close' onClick={refreshPage}> X </button>
                    <button onClick={(e) => displayInfo(e)}> {times} </button>
                  </div>
                </>
              )
            })}
          </div>
          <div className='text'>
            {info && `Your consultaton is set to ${event} ${props.date.toDateString()}`}
          </div>
          <button id='confirm'><a href='https://book.stripe.com/5kA6q88bGfbO2TCbII' target='_blank'> Book Consultation </a></button>
        </div>
      </div> 
    </>
  )
}
export default Times;