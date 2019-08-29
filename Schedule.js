import React from 'react';
import ScheduleD from './ScheduleD';
import ScheduleW from './ScheduleW';
import '../style/Schedule.css'


const Schedule = () => {
    return (
        <>
            <header>
                <p>Harmonogram zajęć</p>
            </header>
             
                <ScheduleD />
                <ScheduleW />
            
        </>
    );
}

export default Schedule;