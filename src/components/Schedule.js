import React from 'react';
import './Schedule.css';
import ScheduleD from './ScheduleD';
import ScheduleW from './ScheduleW';

const Schedule = () => {
    return (
        <>
            <header>
                <p>Harmonogram zajęć</p>
            </header>
            <article>
                <ScheduleD />
                <ScheduleW />
            </article>
        </>
    );
}

export default Schedule;