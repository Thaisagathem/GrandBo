import React from 'react';
import moment from 'moment';

import { useState } from 'react';

interface Props {
  startDate: string;
  endDate: string;
  setStartDate: (formattedDate: string) => void;
  setEndDate: (formattedDate: string) => void;
}

export const DateRangePicker: React.FC<Props> = ({startDate, endDate, setStartDate, setEndDate}) => {
  const [error, setError] = useState(false);

  const validateRange = () => {
    const unixStartDate = Math.round(new Date(startDate).getTime()/1000)
    const unixEndDate = Math.round(new Date(endDate).getTime()/1000)
    if (unixEndDate < unixStartDate) {
      setError(true);
      return;
    }
  }

  const onChangeStartDate = (e: { target: { value: string }; }) => {
    setError(false);
    const formattedDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
    setStartDate(formattedDate);
  };

  const onChangeEndDate = (e: { target: { value: string }; }) => {
    setError(false);
    const formattedDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
    setEndDate(formattedDate);
  };

// FIXME: make start date today
  return (
    <div>
      <div>
        <label htmlFor="start">Start date:</label>
        <input
          type="date"
          id="start"
          min="2022-12-27"
          max="2024-12-31"
          value={startDate}
          onChange={onChangeStartDate}
        ></input>
      </div>
      <div>
        <label htmlFor="end">End date:</label>
        <input
          type="date"
          id="end"
          min="2022-12-27"
          max="2024-12-31"
          value={endDate}
          onChange={onChangeEndDate}
          onBlur={validateRange}
        ></input>
        {error && (
          <label>
            The start date cannot be after the end date!
          </label>
        )}
      </div>
    </div>
  )
}

export default DateRangePicker;