import "./App.css";
import HomePage from "./components/HomePage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./Dashboards/Admin";
import Employee from "./Dashboards/Employee";
import EmployeeProjects from "./Dashboards/EmployeeProjects";
import EmployeeDetails from "./Dashboards/EmployeeDetails";
import EmployeeDocuments from "./Dashboards/EmployeeDocuments";
import Employees from "./Dashboards/Employees";
import EmployeeProfile from "./Dashboards/EmployeeProfile";
import EmployeeNewsfeed from "./Dashboards/EmployeeNewsfeed";
import EmployeeJobVacany from "./Dashboards/EmployeeJobVacany";
import Manager from "./Dashboards/Manager";
import Hr from "./Dashboards/Hr";
import ManagerEmployees from "./Dashboards/ManagerEmployees";
import ManagerProjects from "./Dashboards/ManagerProjects";
import ManagerStakeHolders from "./Dashboards/ManagerStakeHolders";
import ManagerOwners from "./Dashboards/ManagerOwners";
import HrEmployees from "./Dashboards/HrEmployees";
import HrProjects from "./Dashboards/HrProjects";
import HrStakeholders from "./Dashboards/HrStakeholders";
import HrOwners from "./Dashboards/HrOwners";
import HrNewsfeed from "./Dashboards/HrNewsfeed";
import HrJobs from "./Dashboards/HrJobs";
import ProjectAssign from "./Dashboards/ProjectAssign";
import ManagerProfile from "./Dashboards/ManagerProfile";
import Newsfeed from "./Dashboards/Newsfeed";
import HrFilesUpload from "./Dashboards/HrFilesUpload";
import HrProfile from "./Dashboards/HrProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/employee" element={<Employee />} />
          <Route exact path="/employees" element={<Employees />} />
          <Route exact path="/home" element={<Employees />} />
          <Route exact path="/newsfeed" element={<Newsfeed />} />
          <Route exact path="/projects" element={<EmployeeProjects />} />
          <Route exact path="/employeedetails" element={<EmployeeDetails />} />
          <Route
            exact
            path="/employeedocuments"
            element={<EmployeeDocuments />}
          />
          <Route exact path="/employeeprofile" element={<EmployeeProfile />} />
          <Route
            exact
            path="/employeenewsfeed"
            element={<EmployeeNewsfeed />}
          />
          <Route
            exact
            path="/employeejobvacany"
            element={<EmployeeJobVacany />}
          />
          <Route exact path="/manager" element={<Manager />} />
          <Route exact path="/managerprofile" element={<ManagerProfile />} />
          <Route
            exact
            path="/manager/employees/:empId"
            element={<ManagerEmployees />}
          />
          <Route
            exact
            path="/manager/projects/:empId"
            element={<ManagerProjects />}
          />
          <Route
            exact
            path="/manager/stakeholders/:empId"
            element={<ManagerStakeHolders />}
          />
          <Route
            exact
            path="/manager/owners/:empId"
            element={<ManagerOwners />}
          />

          <Route exact path="/hr" element={<Hr />} />
          <Route exact path="/hrprofile" element={<HrProfile />} />
          <Route exact path="/hr/employees/:empId" element={<HrEmployees />} />
          <Route exact path="/hr/projects/:empId" element={<HrProjects />} />
          <Route
            exact
            path="/hr/stakeholders/:empId"
            element={<HrStakeholders />}
          />
          <Route exact path="/hr/owners/:empId" element={<HrOwners />} />
          <Route exact path="/hr/newsfeed/:empId" element={<HrNewsfeed />} />
          <Route exact path="/hr/jobs/:empId" element={<HrJobs />} />

          <Route exact path="/hr/files/:empId" element={<HrFilesUpload />} />
          <Route
            exact
            path="/manager/projectAssign/:empId"
            element={<ProjectAssign />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
