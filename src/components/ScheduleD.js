import React from 'react';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import Saturday from './Saturday';
import Sunday from './Sunday';
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