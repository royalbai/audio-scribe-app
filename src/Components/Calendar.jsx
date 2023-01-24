import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CustomCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    return (
        <div className='calendar'>
            <Calendar
                defaultActiveStartDate={new Date()}
                onChange={onChange}
                value={date}
                className="customCalendar"
            />
            <button className='calButton'>Connect Gmail Calendar</button>
            <button className='calButton'>Troubleshoot</button>
        </div>
    );
}

export default CustomCalendar;