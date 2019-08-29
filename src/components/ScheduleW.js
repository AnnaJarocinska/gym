import React from 'react';
import Table from 'react-bootstrap/Table';
import '../style/Schedule.css'


const ScheduleW = () => {
    return (
        <div className="container">
            <Table responsive striped bordered hover variant="dark" className=" d-none d-md-block">
                <thead>
                    <tr>
                        <th></th>
                        <th>Poniedziałek</th>
                        <th>Wtorek</th>
                        <th>Środa</th>
                        <th>Czwartek</th>
                        <th>Piątek</th>
                        <th>Sobota</th>
                        <th>Niedziela</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="hours">8:00-9:00</th>
                        <th>morning power!</th>
                        <th>morning power!</th>
                        <th>morning power!</th>
                        <th>morning power!</th>
                        <th>morning power!</th>
                        <th>morning power!</th>
                        <th>morning power!</th>
                    </tr>
                    <tr>
                        <th className="hours" >9:00-10:00</th>
                        <th>kaloryfer</th>
                        <th>rzeźba</th>
                        <th>kaloryfer</th>
                        <th>rzeźba</th>
                        <th>hardcore</th>
                        <th>hardcore</th>
                        <th>hardcore</th>
                    </tr>
                    <tr>
                        <th className="hours" >10:00-11:00</th>
                        <th>hardcore</th>
                        <th>zen</th>
                        <th>hardcore</th>
                        <th>zen</th>
                        <th>kaloryfer</th>
                        <th>zen</th>
                        <th>kaloryfer</th>
                    </tr>
                    <tr>
                        <th className="hours">11:00-12:00</th>
                        <th>zen</th>
                        <th>burn it!</th>
                        <th>zen</th>
                        <th>wyciskacz</th>
                        <th>zen</th>
                        <th>burn it!</th>
                        <th>zen</th>
                    </tr>
                    <tr>
                        <th className="hours">15:00-16:00</th>
                        <th>wyciskacz</th>
                        <th>burn it!</th>
                        <th>kaloryfer</th>
                        <th>rzeźba</th>
                        <th>rzeźba</th>
                        <th>burn it!</th>
                        <th>wyciskacz</th>
                    </tr>
                    <tr>
                        <th className="hours">16:00-17:00</th>
                        <th>zen</th>
                        <th>wyciskacz</th>
                        <th>rzeźba</th>
                        <th>zen</th>
                        <th>mocarz</th>
                        <th>burn it!</th>
                        <th>burn it!</th>
                    </tr>
                    <tr>
                        <th className="hours">17:00-18:00</th>
                        <th>burn it!</th>
                        <th>burn it!</th>
                        <th>rzeźba</th>
                        <th>hardcore</th>
                        <th>rzeźba</th>
                        <th>hardcore</th>
                        <th>burn it!</th>
                    </tr>
                    <tr>
                        <th className="hours">18:00-19:00</th>
                        <th>burn it!</th>
                        <th>wyciskacz </th>
                        <th>kaloryfer</th>
                        <th>wyciskacz</th>
                        <th>burn it!</th>
                        <th>hardcore</th>
                        <th>kaloryfer</th>
                    </tr>
                    <tr>
                        <th className="hours">19:00-20:00</th>
                        <th>rzeźba</th>
                        <th>kaloryfer</th>
                        <th>wyciskacz</th>
                        <th>rzeźba</th>
                        <th>hardcore</th>
                        <th>kaloryfer</th>
                        <th>mocarz</th>
                    </tr>
                    <tr>
                        <th className="hours">20:00-21:00</th>
                        <th>goodnight fat!</th>
                        <th>goodnight fat!</th>
                        <th>goodnight fat!</th>
                        <th>goodnight fat!</th>
                        <th>goodnight fat!</th>
                        <th>goodnight fat!</th>
                        <th>goodnight fat!</th>
                    </tr>
                    <tr>
                        <th className="hours">21:00-22:00</th>
                        <th>wyciskacz</th>
                        <th>rzeźba</th>
                        <th>kaloryfer</th>
                        <th>mocarz</th>
                        <th>hardcore</th>
                        <th>zen</th>
                        <th>zen</th>
                    </tr>

                </tbody>
            </Table>
        </div>
    
    );
}

export default ScheduleW;