// import React, { useState } from 'react';
// import './bookappointment.css';
// import { callApi, errorResponse, getSession } from './main';

// const tableStyle = {"width" : "100%"};

// const BookAppointment = () => {
//     const [selectedDoctor, setSelectedDoctor] = useState('');
//     const [patientName, setPatientName] = useState('');
//     const [appointmentTime, setAppointmentTime] = useState('');
//     const [appointmentDate, setAppointmentDate] = useState('');
//     const [diseaseNote, setDiseaseNote] = useState('');

//     const handleDoctorChange = (event) => {
//         setSelectedDoctor(event.target.value);
//     };

//     const handlePatientNameChange = (event) => {
//         setPatientName(event.target.value);
//     };

//     const handleAppointmentTimeChange = (event) => {
//         setAppointmentTime(event.target.value);
//     };

//     const handleAppointmentDateChange = (event) => {
//         setAppointmentDate(event.target.value);
//     };

//     const handleDiseaseNoteChange = (event) => {
//         setDiseaseNote(event.target.value);
//     };

//     const handleAppointmentSubmit = () => {
//         const url = "http://localhost:5000/appointments/create";
//         const data = JSON.stringify({
//             doctorName: selectedDoctor,
//             patientName: patientName,
//             appointmentTime: appointmentTime,
//             appointmentDate: appointmentDate,
//             diseaseNote: diseaseNote,
//         });
//         callApi("POST", url, data, handleAppointmentSuccess, errorResponse);
//     };

//     const handleAppointmentSuccess = (res) => {
//         const data = JSON.parse(res);
//         alert(data);
//     };

//     return (
//         <div className='full-height'>
//             <div className='appointment-content'>
//                 <h3>Book an Appointment</h3>
//                 <table style={tableStyle}>
//                     <tr>
//                         <td>Select Doctor* 
//                             <select value={selectedDoctor} onChange={handleDoctorChange}>
//                                 <option value="Doctor 1">Doctor 1</option>
//                                 <option value="Doctor 2">Doctor 2</option>
//                                 <option value="Doctor 3">Doctor 3</option>
//                                 <option value="Doctor 4">Doctor 4</option>
//                                 <option value="Doctor 5">Doctor 5</option>
//                             </select>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Patient Name* <input type='text' value={patientName} onChange={handlePatientNameChange} className='txtbox' /></td>
//                     </tr>
//                     <tr>
//                         <td>Appointment Time* <input type='text' value={appointmentTime} onChange={handleAppointmentTimeChange} className='txtbox' /></td>
//                     </tr>
//                     <tr>
//                         <td>Appointment Date* <input type='text' value={appointmentDate} onChange={handleAppointmentDateChange} className='txtbox' /></td>
//                     </tr>
//                     <tr>
//                         <td>Disease Note <input type='text' value={diseaseNote} onChange={handleDiseaseNoteChange} className='txtbox' /></td>
//                     </tr>
//                     <tr>
//                         <td><button className='button' onClick={handleAppointmentSubmit}>Book Appointment</button></td>
//                     </tr>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default BookAppointment;

import React, { useState } from 'react';
import './bookappointment.css';
import { callApi, errorResponse, getSession } from './main';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const tableStyle = { "width": "100%" };

const BookAppointment = () => {
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [patientName, setPatientName] = useState('');
    const [appointmentTime, setAppointmentTime] = useState(new Date());
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const [diseaseNote, setDiseaseNote] = useState('');

    const handleDoctorChange = (event) => {
        setSelectedDoctor(event.target.value);
    };

    const handlePatientNameChange = (event) => {
        setPatientName(event.target.value);
    };

    const handleDiseaseNoteChange = (event) => {
        setDiseaseNote(event.target.value);
    };

    const handleAppointmentSubmit = () => {
        const url = "http://localhost:5000/appointments/create";
        const data = JSON.stringify({
            doctorName: selectedDoctor,
            patientName: patientName,
            appointmentTime: appointmentTime.toLocaleTimeString(),
            appointmentDate: appointmentDate.toLocaleDateString(),
            diseaseNote: diseaseNote,
        });
        callApi("POST", url, data, handleAppointmentSuccess, errorResponse);
    };

    const handleAppointmentSuccess = (res) => {
        const data = JSON.parse(res);
        alert(data);
    };

    return (
        <div className='full-height'>
            <div className='appointment-content'>
                <h3>Book an Appointment</h3>
                <table style={tableStyle}>
                    <tr>
                        <td>Select Doctor*
                            <select value={selectedDoctor} onChange={handleDoctorChange}>
                                <option value="Doctor 1">Doctor 1</option>
                                <option value="Doctor 2">Doctor 2</option>
                                <option value="Doctor 3">Doctor 3</option>
                                <option value="Doctor 4">Doctor 4</option>
                                <option value="Doctor 5">Doctor 5</option>
                            </select>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>Patient Name* <input type='text' value={patientName} onChange={handlePatientNameChange} className='txtbox' /></td>
                    </tr>
                    <tr>
                    <td>Appointment Time*  <input type='text' value={appointmentTime} onChange={setAppointmentTime} className='txtbox' /></td>
                    <br></br>
                    </tr>
                    <tr>
                        <td>Appointment Date* <DatePicker selected={appointmentDate} onChange={setAppointmentDate} className='txtbox' /></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>Disease Note <input type='text' value={diseaseNote} onChange={handleDiseaseNoteChange} className='txtbox' /></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><button className='button' onClick={handleAppointmentSubmit}>Book Appointment</button></td>
                    </tr>
                    <br></br>
                </table>
            </div>
        </div>
    );
};

export default BookAppointment;

