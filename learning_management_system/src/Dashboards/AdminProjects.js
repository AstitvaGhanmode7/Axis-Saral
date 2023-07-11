import React, { useEffect, useState } from 'react'
import EmployeeNavbar from './EmployeeNavbar'
import EmployeeService from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom';
import "../Style.css";

const AdminProjects = () => {
    const[title,setTitle]=useState();
    const[description,setDescription]=useState();
    const[shId,setShId]=useState();
    const[oId,setOId]=useState();
    const[managerId,setManagerId]=useState()
    const[hrId,setHrId]=useState();
    const[startDate,setStartDate]=useState();
    const[endDate,setEndDate]=useState();
    const[status,setStatus]=useState();
    const[projData,setAllProjdata]=useState([]);
    const[showAllProj,setShowAllProj]=useState(true);
    const[showAddProj,SetShowAddProj]=useState(false);
    const[showprojDetails,setShowprojDetails]=useState(false);
    const[showEditProj,setshowEditProj]=useState(false);
    const[projectEdit,setProjectEdit]=useState([]);
    const[indvProjData,setIndvProjData]=useState([]);
    const[indvEmpData,setIndvEmpData]=useState([]);
   const employeeService=new EmployeeService();
   const navigate=useNavigate();


   useEffect(()=>{
    employeeService.getAllProjects()
    .then((res)=>{
      setAllProjdata(res.data);
      console.log(res.data);
    })

   },[])


   const handleAllProjects=()=>{
    setShowAllProj(true);
    SetShowAddProj(false);
    setShowprojDetails(false);
    setshowEditProj(false);
   }

    const handleAddProject=()=>{
        setShowAllProj(false);
        SetShowAddProj(true);
        setShowprojDetails(false);
        setshowEditProj(false);
    }

    const handleSubmit=()=>{
      if(!title || !description || !managerId || !hrId || !shId || !oId || !startDate || !endDate || !status){
        alert("Please fill all fields");
      }
      else{
        employeeService.addProject(title,description,managerId,hrId,shId,oId,startDate,endDate,status)
        .then((res)=>{
          console.log(res.data);
          alert("Added successfully");
        })
      }

    }

    const handleGoBack=()=>{
      navigate("/admin");
    }

    const handleProjectDetails=(id)=>{
    
    //const newArray=patients.filter((patient)=>{return (patient.name.toLowerCase()===searchInput.toLowerCase())});
    const prodata=projData.filter((res)=>{
      return (res.proj_id === id)
    });
    console.log(prodata);
    setIndvProjData(prodata);
    //const empData=axios.get(`http://localhost:8080/employee/getEmpByProjId/${id}`)

    //console.log(empData);
    employeeService.getEmpByProjId(id).
    then((res)=>{
        console.log(res.data);
        setIndvEmpData(res.data.emp_list);
    });

    SetShowAddProj(false);
    setShowAllProj(false);
    setShowprojDetails(true);
    setshowEditProj(false);

    }

    const titleChangeHandler=(event)=>{
      console.log(event.target.value)
     // setEmpName(event.target.value)
     projectEdit.title=event.target.value;
    setProjectEdit((prevState)=>{
      return {...prevState,projectEdit:event.target.value}
     })
  }
  const descChangeHandler=(event)=>{
      console.log(event.target.value)
     // setEmpName(event.target.value)
     projectEdit.description=event.target.value;
     setProjectEdit((prevState)=>{
      return {...prevState,projectEdit:event.target.value}
     })
  }

  const manageridChangeHandler=(event)=>{
    console.log(event.target.value)
   // setEmpName(event.target.value)
   projectEdit.manager.emp_id=event.target.value;
   setProjectEdit((prevState)=>{
    return {...prevState,projectEdit:event.target.value}
   })
}

const hridChangeHandler=(event)=>{
  console.log(event.target.value)
 // setEmpName(event.target.value)
 projectEdit.hr.emp_id=event.target.value;
 setProjectEdit((prevState)=>{
  return {...prevState,projectEdit:event.target.value}
 })
}
const shidChangeHandler=(event)=>{
  console.log(event.target.value)
 // setEmpName(event.target.value)
 projectEdit.stakeHolder.sh_id=event.target.value;
 setProjectEdit((prevState)=>{
  return {...prevState,projectEdit:event.target.value}
 })
}
const ownidChangeHandler=(event)=>{
  console.log(event.target.value)
 // setEmpName(event.target.value)
 projectEdit.owner.o_id=event.target.value;
 setProjectEdit((prevState)=>{
  return {...prevState,projectEdit:event.target.value}
 })
}
const startDateChangeHandler=(event)=>{
  console.log(event.target.value)
 // setEmpName(event.target.value)
 projectEdit.startDate=event.target.value;
 setProjectEdit((prevState)=>{
  return {...prevState,projectEdit:event.target.value}
 })
}
const endDateChangeHandler=(event)=>{
  console.log(event.target.value)
 // setEmpName(event.target.value)
 projectEdit.endDate=event.target.value;
 setProjectEdit((prevState)=>{
  return {...prevState,projectEdit:event.target.value}
 })
}
const statusChangeHandler=(event)=>{
  console.log(event.target.value)
 // setEmpName(event.target.value)
 projectEdit.status=event.target.value;
 setProjectEdit((prevState)=>{
  return {...prevState,projectEdit:event.target.value}
 })
}



    const handleProjectEdit=(project)=>{
      setProjectEdit(project);
      setshowEditProj(true);
      setShowAllProj(false);
      setShowprojDetails(false);
      SetShowAddProj(false);
    }


    const handleEditSubmit=()=>{

    employeeService.updateProject(projectEdit.proj_id,
      projectEdit.title,
      projectEdit.description,
      projectEdit.manager.emp_id,
      projectEdit.hr.emp_id,
      projectEdit.stakeHolder.sh_id,
      projectEdit.owner.o_id,
      projectEdit.startDate,
      projectEdit.endDate,
      projectEdit.status
      ).then((res)=>{
        console.log(res.data);
        alert("Updated Successfully");
      })
    }

    return (
        <div>
          <EmployeeNavbar />
          <br></br>
          <h2>Admin Dashboard</h2>
          <br></br>
    
          <div className="employee-container">
          <button onClick={handleGoBack} id="button-addon2" type='button' className='btn btn-primary' >
       {/* <i className="fas fa-paper-plane"></i> */}
       <i class="fa fa-arrow-left" aria-hidden="true"></i> 
        </button>
            <button className="btn btn-primary" onClick={handleAllProjects} >
             All Projects
            </button>
            <button className="btn btn-primary" onClick={handleAddProject}>
              Add Project
            </button>
          </div>

          {showAllProj && (
            <>
        <table>
            <thead>
                <tr>
                <th>Project ID</th>
                <th>Project Title</th>
                <th>Project Description</th>
                <th>Manager Name</th>
                <th>Manager MailId</th>
                <th>Hr Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th colSpan={2}>Actions</th>
                </tr>
           </thead>
           <tbody>
            {
                     projData.map(project=>(
                      <tr key={project.id}>
                          <td>{project.proj_id}</td>
                          <td>{project.title}</td>
                          <td>{project.description}</td>
                          <td>{project.manager.name}</td>
                          <td>{project.manager.email}</td>            
                          <td>{project.hr.name}</td>
                          <td>{project.startDate}</td>
                          <td>{project.endDate}</td>
                          <td>{project.status}</td>
                          <td>
                          <button className="btn btn-success" onClick={()=>handleProjectDetails(project.proj_id)}>View Details</button>
                          </td>
                          <td>
                          <button className="btn btn-warning" onClick={()=>handleProjectEdit(project)}>Edit
                          <i className='fas fa-edit'></i>
                          </button>
                          </td>
                      </tr>
                  ))           
            }
           </tbody>
        </table>
        </>
       )}
       {showprojDetails && (
            <>
           <h3>Project Details</h3>
        <table>
            <thead>
                <tr>
                <th>Project ID</th>
                <th>Project Title</th>
                <th>Project Description</th>
                <th>Manager ID</th>
                <th>Manager Name</th>
                <th>Manager MailId</th>
                <th>Hr Id</th>
                <th>Hr Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                </tr>
           </thead>
           <tbody>
            {
                     indvProjData.map(pro=>(
                      <tr key={pro.id}>
                          <td>{pro.proj_id}</td>
                          <td>{pro.title}</td>
                          <td>{pro.description}</td>
                          <td>{pro.manager.emp_id}</td>
                          <td>{pro.manager.name}</td>
                          <td>{pro.manager.email}</td>
                          <td>{pro.hr.emp_id}</td>
                          <td>{pro.hr.name}</td>
                          <td>{pro.startDate}</td>
                          <td>{pro.endDate}</td>
                          <td>{pro.status}</td>
                      </tr>
                  ))           
            }
           </tbody>
          </table> 
        <h3>Employees Details</h3>
        <table>
            <thead>
                <tr>
                <th>Serial NO</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Address</th>
                <th>Contact</th>
                </tr>
           </thead>
           <tbody>
            {
                     indvEmpData.map((emp,index)=>(
                      <tr key={index} >
                          <td>{index+1}</td>
                          <td>{emp.name}</td>
                          <td>{emp.email}</td>
                          <td>{emp.role}</td>
                          <td>{emp.address}</td>
                          <td>{emp.contact}</td>
                      </tr>
                  ))           
            }
           </tbody>
        </table>
        </>
       )}



{showAddProj && (
        <>
        <h3 className='text-center'>Add Project</h3>
        <div className='d-flex justify-content-center align-items-center 100-w'>
        <div className='form-container rounded bg-white'>
        <form >
          <div className='mb-2'>
            <label htmlFor='title'>Title</label>
            <input type="text"  class="form-control" id="Title" placeholder="Enter Title" required value={title} onChange={(event) => { setTitle(event.target.value); }}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='description'>Description</label>
            <input type="text"  class="form-control" id="Description" placeholder="Enter Description" required value={description} onChange={(event) => { setDescription(event.target.value); }}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='manager id'>Manager Id</label>
            <input type="text"  class="form-control" id="Manager Id" placeholder="Enter Manager Id" required value={managerId} onChange={(event) => { setManagerId(event.target.value); }}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='hr id'>Hr Id</label>
            <input type="text"  class="form-control" id="Hr Id" placeholder="Enter Hr Id" required value={hrId} onChange={(event) => { setHrId(event.target.value); }}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='sh id'>StakeHolder Id</label>
            <input type="text"  class="form-control" id="StakeHolder Id" placeholder="Enter StakeHolder Id" required value={shId} onChange={(event) => {setShId(event.target.value);}}
            />
          </div>
         <div className='mb-2'>
            <label htmlFor='owner id'>Owner Id</label>
            <input type="text"  class="form-control" id="Owner id" placeholder="Enter Owner Id" required value={oId} onChange={(event) => {setOId(event.target.value);}}
            />
          </div>
          </form>
          <form>
          <div className='mb-2'>
            <label htmlFor='start date'>Start Date</label>
            <input type="date"  class="form-control" id="Start Date" placeholder="Enter Start date" required value={startDate} onChange={(event) => {setStartDate(event.target.value);}}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='end date'>End Date</label>
            <input type="date"  class="form-control" id="End Date" placeholder="Enter End date" required value={endDate} onChange={(event) => {setEndDate(event.target.value);}}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='status'>Status</label>
            <input type="text"  class="form-control" id="Status" placeholder="Enter Status" required value={status} onChange={(event) => {setStatus(event.target.value);}}
            />
          </div>
          <br/>
          <div className='d-grid'>
            <button className='btn btn-primary'onClick={handleSubmit}>Add Project</button>
          </div>
          </form>
          </div>
          </div>
        </>
    )}


{showEditProj && (
        <>
        <h3 className='text-center'>Update Project</h3>
        <div className='d-flex justify-content-center align-items-center 100-w'>
        <div className='form-container rounded bg-white'>
        <form >
          <div className='mb-2'>
            <label htmlFor='title'>Title</label>
            <input type="text"  class="form-control" id="Title" placeholder="Enter Title" required value={projectEdit.title} onChange={titleChangeHandler}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='description'>Description</label>
            <input type="text"  class="form-control" id="Description" placeholder="Enter Description" required value={projectEdit.description} onChange={descChangeHandler}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='manager id'>Manager Id</label>
            <input type="text"  class="form-control" id="Manager Id" placeholder="Enter Manager Id" required value={projectEdit.manager.emp_id} onChange={manageridChangeHandler}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='hr id'>Hr Id</label>
            <input type="text"  class="form-control" id="Hr Id" placeholder="Enter Hr Id" required value={projectEdit.hr.emp_id} onChange={hridChangeHandler}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='sh id'>StakeHolder Id</label>
            <input type="text"  class="form-control" id="StakeHolder Id" placeholder="Enter StakeHolder Id" required value={projectEdit.stakeHolder.sh_id} onChange={shidChangeHandler}
            />
          </div>
         <div className='mb-2'>
            <label htmlFor='owner id'>Owner Id</label>
            <input type="text"  class="form-control" id="Owner id" placeholder="Enter Owner Id" required value={projectEdit.owner.o_id} onChange={ownidChangeHandler}
            />
          </div>
          </form>
          <form>
          <div className='mb-2'>
            <label htmlFor='start date'>Start Date</label>
            <input type="date"  class="form-control" id="Start Date" placeholder="Enter Start date" required value={projectEdit.startDate} onChange={startDateChangeHandler}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='end date'>End Date</label>
            <input type="date"  class="form-control" id="End Date" placeholder="Enter End date" required value={projectEdit.endDate} onChange={endDateChangeHandler}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='status'>Status</label>
            <input type="text"  class="form-control" id="Status" placeholder="Enter Status" required value={projectEdit.status} onChange={statusChangeHandler}
            />
          </div>
          <br/>
          <div className='d-grid'>
            <button className='btn btn-primary'onClick={handleEditSubmit}>Update Project</button>
          </div>
          </form>
          </div>
          </div>
        </>
    )}
          </div>
  )
}

export default AdminProjects