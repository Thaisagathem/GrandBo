import React, { useState } from 'react'
import moment from 'moment'
import DateRangePicker from './DateRangePicker'

export const BookingForm: React.FC = () => {
  const [bookingDetails, setBookingDetails] = useState({
    bookingCreationDate: `${moment(new Date()).format('YYYY-MM-DD')}`,
    createdBy: "",
    numberOfGuests: "",
    startDate: "",
    endDate: ""
  })

  const setCreatedBy = (e: { target: { value: string }; }) => setBookingDetails({ ...bookingDetails, createdBy: e.target.value})
  const setGuests = (e: { target: { value: string }; }) => setBookingDetails({ ...bookingDetails, numberOfGuests: e.target.value})
  const setStartDate = (startDate: string) => setBookingDetails({ ...bookingDetails, startDate})
  const setEndDate = (endDate: string) => setBookingDetails({ ...bookingDetails, endDate})

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "70vh", justifyContent: "space-between", padding: "50px"}}>
      <h1>Welcome to the GrandBo</h1>
      <label>Who&apos;s making the booking?</label>
      <input 
        value={bookingDetails.createdBy} 
        onChange={setCreatedBy} 
        style={{width: "200px", padding: "5px", boxSizing: "border-box", borderRadius: "10px"}}
      ></input>
      <label>How many guests are you booking for?</label>
      <input 
        type="number" 
        min="1" 
        max="8" 
        value={bookingDetails.numberOfGuests} 
        onChange={setGuests}
        style={{width: "50px", padding: "5px", boxSizing: "border-box", borderRadius: "10px"}}
      ></input>
      <label>When would you like to book for?</label>
      <DateRangePicker
        startDate={bookingDetails.startDate}
        endDate={bookingDetails.endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      {/* Add validation to not accept invalid date range or busy dates */}
      <button onClick={() => console.log("STATE", bookingDetails)}></button>
    </div>
  )
}

export default BookingForm;
