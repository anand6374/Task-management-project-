import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Taskadd from "./Component/Taskadd";
import Employeelogin from "./Component/Employeelogin";
import Displayparticularemployee from './Component/Displayparticularemployee';
import EmployeeRegistration from './Component/Employeeregister';
import Managerhomepage from './Component/Managerhomepage';
import Displayallworker from './Component/Displayallworker';
import DisplayEmployeetask from './Component/DisplayEmployeetask';
import Displaytask from './Component/Displaytask';
import Managerhome from './Component/managerhome';
import Developerhomepage from './Component/Developerhomepage';
import Adminhomepage from './Component/Adminhomepage';
import Adminhome from './Component/Adminhome';
import Developerhome from './Component/Developerhome';
import Gmail from './Component/Gmail';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<EmployeeRegistration />} />
        <Route path="/Employeelogin" element={<Employeelogin />} />
        
        <Route path="/managerpage" element={<Managerhomepage />}>
        <Route path="home"  element={<Managerhome/>}/>
          <Route path="addtask" element={<Taskadd />} />
          <Route path="Managerinfo" element={<Displayparticularemployee />} />
          <Route path="allemployeeinfo" element={<Displayallworker />} />
          <Route path="yourtask" element={<DisplayEmployeetask />} />
          <Route path="allemployeetask" element={<Displaytask />} />
          <Route path="managergmail" element={<Gmail/>}/>
          
        </Route>

        <Route path="/developerpage" element={<Developerhomepage/>}>
        <Route path="developerhome"  element={<Developerhome/>}/>
       <Route path="developertask"    element={<DisplayEmployeetask/>} />
       <Route path="developerinfo"         element={<Displayparticularemployee/>} />
       <Route path="developergmail"   element={<Gmail/>}/>
        </Route>

        <Route path="/adminpage"  element={<Adminhomepage/>}>
        <Route path="adminhome" element={<Adminhome/>} />
        <Route path="addemployeetask" element={<Taskadd/>}/>
        <Route path="alltask"  element={<Displaytask/>}/>
        <Route path="personalinfo" element={<Displayparticularemployee/>}/>
        <Route path="allemployee" element={<Displayallworker/>}/>
        <Route path="admingmail"  element={<Gmail/>}/>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
