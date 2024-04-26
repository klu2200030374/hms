// import React, { useState } from 'react';
// import './PaymentGateway.css';


// const PaymentGateway = ({  onPaymentSuccess }) => {
//     const [doctorName, setDoctorName] = useState('');
//     const [patientName, setPatientName] = useState('');
//     const [paymentMethod, setPaymentMethod] = useState('');
//     const [paymentSuccessful, setPaymentSuccessful] = useState(false);

//     const handlePatientNameChange = (event) => {
//         setPatientName(event.target.value);
//     };
//     const handleDoctorNameChange = (event) => {
//         setDoctorName(event.target.value);
//     };

//     const handlePaymentMethodChange = (event) => {
//         setPaymentMethod(event.target.value);
//     };

//     const handlePaymentSubmit = () => {
//         if (patientName !== "") {
//             setPaymentSuccessful(true);
//             onPaymentSuccess({
//                 doctorName: doctorName,
//                 patientName: patientName,
//                 paymentMethod: paymentMethod
//             });
//         } else {
//             alert("Please enter patient name");
//         }
//     };

//     return (
//         <div>
//             {paymentSuccessful ? (
//                 <div>
//                     <h4>Payment Successful!</h4>
//                     <p>Doctor Name: {doctorName}</p>
//                     <p>Patient Name: {patientName}</p>
//                     <p>Payment Method: {paymentMethod}</p>
//                 </div>
//             ) : (
//                 <div>
//                     <h4>Enter Payment Details</h4>
//                     <p>Doctor Name: <input type='text' value={doctorName} onChange={handleDoctorNameChange} /></p>
//                     <p>Patient Name*: <input type='text' value={patientName} onChange={handlePatientNameChange} /></p>
//                     <p>Payment Method*:
//                         <select value={paymentMethod} onChange={handlePaymentMethodChange}>
//                             <option value="">Select Payment Method</option>
//                             <option value="Cash">Cash</option>
//                             <option value="Net Banking">Net Banking</option>
//                         </select>
//                     </p>
//                     <button onClick={handlePaymentSubmit}>Submit Payment</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PaymentGateway;

import React, { useState } from 'react';
import './PaymentGateway.css';

const PaymentGateway = ({ onPaymentSuccess }) => {
    const [doctorName, setDoctorName] = useState('');
    const [patientName, setPatientName] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    const handlePatientNameChange = (event) => {
        setPatientName(event.target.value);
    };
    const handleDoctorNameChange = (event) => {
        setDoctorName(event.target.value);
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handlePaymentSubmit = () => {
        if (patientName !== "") {
            setPaymentSuccessful(true);
            onPaymentSuccess({
                doctorName: doctorName,
                patientName: patientName,
                paymentMethod: paymentMethod
            });
        } else {
            alert("Please enter patient name");
        }
    };

    return (
        <div className="payment-gateway-container">
            {paymentSuccessful ? (
                <div className="payment-success">
                    <h4>Payment Successful!</h4>
                    <p>Doctor Name: {doctorName}</p>
                    <p>Patient Name: {patientName}</p>
                    <p>Payment Method: {paymentMethod}</p>
                </div>
            ) : (
                <div className="payment-form">
                    <h4>Enter Payment Details</h4>
                    <p>Doctor Name: <input type='text' value={doctorName} onChange={handleDoctorNameChange} /></p>
                    <p>Patient Name*: <input type='text' value={patientName} onChange={handlePatientNameChange} /></p>
                    <p>Payment Method*:
                        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                            <option value="">Select Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Net Banking">Net Banking</option>
                        </select>
                    </p>
                    <button onClick={handlePaymentSubmit}>Submit Payment</button>
                </div>
            )}
        </div>
    );
};

export default PaymentGateway;
