import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Styles/Calendar.css';
import Time from './Time.js';


const BookMe = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false)
  return (
    <>
      <div className='bookBody'>
        <div className='calendar'>
          <h1>Book Your Consultation </h1>
          <h4> There is a $25 fee to book </h4>
          <span> Fee will be deducted from final amount </span>
          <div>
            <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
            {date.length > 0 ? (
              <p>
                <span>Start:</span>
                {date[0].toDateString()}
                &nbsp;
                &nbsp;
                <span>End:</span>{date[1].toDateString()}
              </p>
            ) : (
              <p>
                <span className='date'>Selected date: </span>{date.toDateString()}
              </p>
            )
            }
            <Time showTime={showTime} date={date} />

          </div>
        </div>
      </div>
    </>
  )
}

export default BookMe;