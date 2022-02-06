import React from "react";

// import AddPatient from "./AddPatient";
import PatientsList from "./Patientslist";

const Patients = () => {
    //   const allPatients = useSelector((state) => state.patients);

    return (
        <main>
            <h2>Patiënten</h2>
            {/* <AddPatient /> */}
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Voornaam</th>
                        <th>Achternaam</th>
                        <th>Regio</th>
                    </tr>
                </thead>
                {/* <PatientsList patients={allPatients} /> */}
                <PatientsList />
            </table>
        </main>
    );
};

export default Patients;









// import React from "react"

// const Patients = ({ patients, patientIsSick, addPatient, removePatient, }) => {
//     const allPatients = patients.map(patient => {
//         return <tr key={patient.id} id={patient.id}>
//             <td>{patient.name}</td>
//             <td>{patient.surname}</td>
//             {/* <td>{patient.yearOfBirth}</td>
//             <td>{patient.mobile}</td>
//             <td>{patient.email}</td> */}
//             <td><input type="checkbox" onChange={patientIsSick} value={patient.id} /></td>
//             <td ><span onClick={removePatient} id={patient.id}>
//                 <button>Delete</button></span></td>
//         </tr>
//     });

//     return (
//         <div>
//             <span><h2>Nieuwe patient:</h2></span>
//             <form onSubmit={addPatient} >
//                 <input type="text" name="name" placeholder="Name" />
//                 <input type="text" surname="surname" placeholder="Surname" />
//                 {/* <input type="number" name="yearOfBirth" placeholder="Birthyear" /> */}
//                 {/* <input type="phone" name="mobile" placeholder="Phone" />
//                 <input type="mail" name="email" placeholder="@:E-mail" /> */}
//                 <br></br><button>Voeg toe</button>
//             </form>
//             <br></br>
//             <table>
//                 <tbody>
//                     <tr>
//                         <th>First name</th>
//                         <th>Last name</th>
//                         {/* <th>Year</th>
//                         <th>Phone</th>
//                         <th>E-mail</th> */}
//                         <th>Sick</th>
//                     </tr>
//                     {allPatients}
//                 </tbody>
//             </table>
//         </div>
//     );
// };


// export default Patients