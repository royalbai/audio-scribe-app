import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CustomCalendar({calendarDrop}) {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    return (
        <div ref={calendarDrop} className='calendar' >
            <Calendar
                defaultActiveStartDate={new Date()}
                onChange={onChange}
                value={date}
                className="customCalendar"
            />
            <button className='calButton'><h2>Available on:</h2>
                            <li>Chrome Desktop (Best)</li>
                            <li>Safari 14.1</li>
                            <li>Microsoft Edge</li>
                            <li>Android webview</li>
                            <li>Samsung Internet</li>
            </button>
        </div>
    );
}

export default CustomCalendar;