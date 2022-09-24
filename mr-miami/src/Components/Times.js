import React, { useState } from 'react';
import '../Styles/Times.css';
import TimeSlots from './TimeSlots';

function Times(props) {

  const [event, setEvent] = useState(null);
  const [modal, setModal] = useState(false);
  const [isBooked,setBooked] = useState(false);
  const [enterEmail,setEnterEmail] = useState(false)
  

  

  // display the times for the selected date
  const displayInfo = (e) => {
    setEvent(e.target.innerText);
  }
  // for modal to pop up when user clicks a date
  const toggleModal = () => {
    setModal(!modal);
  }
  const email = (e) => {
  let date = `${event} ${props.date.toDateString()}`
  setBooked(true);
  console.log(date);
  e.preventDefault()
  }

  //reload 
  const refreshPage = () => {
    window.location.reload();
  }

//change for email input 
const handleChange = (e) => {
  console.log(e.target.value)
  setEnterEmail(true)
}
  return (
    <>
      <div className='Modal' id='modal'>
        <div onClick={toggleModal} className='Overlay'></div>
        <div className='Content'>
        </div>
        <div className="times Content">
          <div className='container'> 
          {isBooked ? 
            (
            <div className='email__input'>
            <h1> Please enter your email for confirmation details </h1>
            <h2>Your consultaton is set to {event} {props.date.toDateString()}</h2>
            <input type='text' placeholder='Please Enter Email' id='email__text' onChange={handleChange}/> {/* */}
            </div>
            ) :
            <TimeSlots displayInfo={displayInfo} refreshPage={refreshPage}/>
            }
          </div>
         <input type='submit' value='Book Consultation' id='confirm' onClick={(e) => email(e)}/> 
          {/* <a href='https://book.stripe.com/5kA6q88bGfbO2TCbII' target='_blank' rel='nonreferrer' */}
        </div>
      </div>
      </>
  )
}
export default Times;