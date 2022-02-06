import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Home/Home";
import Calendar from "./Components/Calender/Calendar";
import Day from "./Components/Calender/Day";

import generateRandomAppointments from "./Components/Utils/Utils";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      appointments: generateRandomAppointments(125)
    }
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calendar">Calendar view</Link>
              </li>
              <li>
                <Link to="/day">Day view</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/calendar">
                <Calendar appointments={this.state.appointments} />
              </Route>
              <Route path="/day">
                <Day appointments={this.state.appointments.filter(app => app.day === 10)} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    )
  }

}
export default App;



//........................................................

// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Home from "./Components/Home/Home";
// import Calendar from "./Components/Calender/Calendar";
// import Day from "./Components/Calender/Day";

// import generateRandomAppointments from "./Components/Utils/Utils";
// // import Patients from "./Components/Patients/Patients";

// const appointments = generateRandomAppointments(100);

// const App = () => (
//   <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/calendar">Calendar view</Link>
//           </li>
//           <li>
//             <Link to="/day">Day view</Link>
//           </li>

//         </ul>
//       </nav>
//       <main>
//         <Switch>
//           <Route path="/calendar">
//             <Calendar appointments={appointments} />
//           </Route>
//           <Route path="/day">
//             <Day appointments={appointments.filter(app => app.day === 1)} />
//           </Route>

//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </main>
//     </div>
//   </Router>
// );
// export default App;


//.................................................................


// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Home from "./Components/Home/Home";
// import Calendar from "./Components/Calender/Calendar";
// import Day from "./Components/Calender/Day";


// // const appointments = generateRandomAppointments(70);

// const App = ({
//   patients,
//   addPatient,
//   removePatient,
//   patientIsSick,

//   appointments,
//   addAppointment,
//   moveAppointment,
//   removeAppointment,

// }

// ) => (
//   <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/calender">Calendar view</Link>
//           </li>
//           <li>
//             <Link to="/day">Day view</Link>
//           </li>
//           {/* <li>
//             <Link to="/patients">Patients</Link>
//           </li> */}
//         </ul>
//       </nav>
//       <main>
//         <Switch>
//           <Route path="/calendar">
//             <Calendar
//               appointments={appointments}
//               deleteAppointment={removeAppointment}
//               changeAppointment={moveAppointment}
//             />
//           </Route>
//           <Route path="/day">
//             <Day appointments={appointments.filter(app => app.day === 1)} />
//           </Route>
//           <Route path="/">
//             <Home
//               appointments={appointments}
//               addAppointment={addAppointment}
//               moveAppointment={moveAppointment}
//               removeAppointment={removeAppointment}

//               patients={patients}
//               addPatient={addPatient}
//               removePatient={removePatient}
//               patientIsSick={patientIsSick}


//             />
//           </Route>
//         </Switch>
//       </main>
//     </div>
//   </Router>
// );
// export default App;

