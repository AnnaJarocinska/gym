import React from 'react';
import Table from 'react-bootstrap/Table';

const Tuesday = () => {
    return ( 
        <Table responsive striped bordered hover variant="dark" id="tuesday" className="d-md-none">
            <thead>
                    <tr>
                    <td colspan="2">Wtorek</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th>8:00 - 9:00</th>
                        <th>morning power!</th>
                      
                       
                    </tr>
                    <tr>
                    <th>9:00 - 10:00</th>
                        <th>kaloryfer</th>
                       
                        
                    </tr>
                    <tr>
                    <th>10:00 - 11:00</th>
                        <th>hardcore</th> 
                    </tr>
                    <tr>
                    <th>11:00 - 12:00</th>
                        <th>zen</th>
                    </tr>
                    <tr>
                    <th>15:00 - 16:00</th>
                        <th>wyciskacz</th>
                    </tr>
                    <tr>
                    <th>16:00 - 17:00</th>
                        <th>zen</th> 
                    </tr>
                    <tr>
                    <th>17:00 - 18:00</th>
                        <th>burn it!</th>   
                        </tr>
                        <tr>
                        <th>18:00 - 19:00</th>
                        <th>burn it!</th>
                        </tr>
                        <tr>
                        <th>19:00 - 20:00</th>
                        <th>rzeźba</th>               
                            </tr>
                            <tr>
                            <th>20:00 - 21:00</th>
                    <th>goodnight fat!</th>       
                         </tr>
                            <tr>
                            <th>21:00 - 22:00</th>
                        <th>wyciskacz</th>                        
                                </tr>
                                </tbody>
            </Table>
                
     );
}
 
export default Tuesday;