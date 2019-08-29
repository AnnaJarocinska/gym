import React from 'react';
import Monday from './week/Monday';
import Tuesday from './week/Tuesday';
import Wednesday from './week/Wednesday';
import Thursday from './week/Thursday';
import Friday from './week/Friday';
import Saturday from './week/Saturday';
import Sunday from './week/Sunday';
import Navweek from './Navweek';

const ScheduleD = () => {
    return ( 
        <>
        <Navweek/>
        <Monday/>
        <Tuesday/>
        <Wednesday/>
        <Thursday/>
        <Friday/>
        <Saturday/>
        <Sunday/>
        </>
     );
}
 
export default ScheduleD;