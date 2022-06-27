import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = props => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  const getTimeWithOffset = offset =>
    new Date(
      new Date().setHours(new Date().getHours() + offset + new Date().getTimezoneOffset() / 60),
    );

  return (
    <>
      <div className="clock__location">{props.location}</div>
      <div className="clock__time">
        {moment(getTimeWithOffset(props.offset)).format('HH:mm:ss A')}
      </div>
    </>
  );
};

export default Clock;
