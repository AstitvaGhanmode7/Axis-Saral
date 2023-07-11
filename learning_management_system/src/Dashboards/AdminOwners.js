import React, { useEffect, useState } from 'react'
import EmployeeService from '../Services/EmployeeService';
import EmployeeNavbar from './EmployeeNavbar';
import { useNavigate } from 'react-router-dom';
import "../Style.css";

const AdminOwners = () => {

    const[name,setName]=useState()
    const[email,setEmail]=useState();
    const[contact,setContact]=useState();
    const[own,setOwn]=useState([]);
     const[showAllOwn,setShowAllOwn]=useState(true);
     const[showAddOwn,setShowAddOwn]=useState(false);
     const[showEditOwn,setshowEditOwn]=useState(false)
     const[ownerData,setOwnerData]=useState([]);
     const employeeService=new EmployeeService();
     const navigate=useNavigate();

     useEffect(()=>{
         employeeService.getAllOwners()
         .then((res)=>{
         setOwnerData(res.data);
     })
        
     },[])


    const handleAllOwn=()=>{
        setShowAllOwn(true);
        setShowAddOwn(false);
        setshowEditOwn(false);
    }
    const handleAddOwn=()=>{
        setShowAllOwn(false);
        setShowAddOwn(true);
        setshowEditOwn(false);
    }

    const handleSubmit=()=>{
        if(!name || !email || !contact){
            alert("Please enter all fields")
        }else{
        employeeService.addOwner(name,email,contact)
        .then((res)=>{
             console.log(res.data);
             alert("Added Successfully");
        })

        }
    }
    const handleGoBack=()=>{
      navigate("/admin");
    }

    const nameChangeHandler=(event)=>{
      console.log(event.target.value)
     // setEmpName(event.target.value)
     own.name=event.target.value;
     setOwn((prevState)=>{
      return {...prevState,own:event.target.value}
     })
  }
  const emailChangeHandler=(event)=>{
      console.log(event.target.value)
     // setEmpName(event.target.value)
     own.email=event.target.value;
     setOwn((prevState)=>{
      return {...prevState,own:event.target.value}
     })
  }

  const contactChangeHandler=(event)=>{
    console.log(event.target.value)
   // setEmpName(event.target.value)
   own.contact=event.target.value;
   setOwn((prevState)=>{
    return {...prevState,own:event.target.value}
   })
}


    const handleEdit=(emp)=>{
      setOwn(emp);
      setShowAllOwn(false);
      setShowAddOwn(false);
      setshowEditOwn(true);

    }


    const handleEditSubmit=()=>{
      
      employeeService.updateOwner(own.o_id,own.name,own.email,own.contact)
      .then((res)=>{
        console.log(res.data);
        alert("Updated Successfully");

      })
      

    }

  return (
    <div><EmployeeNavbar />
    <br></br>
    <h2>Admin Dashboard</h2>
    <br></br>

    <div className="employee-container">
    <button onClick={handleGoBack} id="button-addon2" type='button' className='btn btn-primary' >
       {/* <i className="fas fa-paper-plane"></i> */}
       <i class="fa fa-arrow-left" aria-hidden="true"></i> 
        </button>
      <button className="btn btn-primary" onClick={handleAllOwn} >
       All owners
      </button>
      <button className="btn btn-primary" onClick={handleAddOwn}>
        Add Owners
      </button>
    </div>

    {showAllOwn && (
            <>
        <table>
            <thead>
                <tr>
                <th>Owner ID</th>
                <th>Owner Name</th>
                <th>Owner MailId</th>
                <th>Owner Contact</th>
                <th>Actions</th>
                </tr>
           </thead>
           <tbody>
            {
                     ownerData.map(emp=>(
                      <tr key={emp.id}>
                          <td>{emp.o_id}</td>
                          <td>{emp.name}</td>
                          <td>{emp.email}</td>
                          <td>{emp.contact}</td>
                          <td>
                            <button className='btn btn-warning' onClick={()=>handleEdit(emp)}>Edit
                              <i class="fas fa-edit"></i>
                            </button>
                          </td>
                      </tr>
                  ))           
            }
           </tbody>
        </table>
        </>
       )}

{showEditOwn && (
        <>
        <h3 className='text-center'>Update Owner</h3>
        <div className='d-flex justify-content-center align-items-center 100-w'>
        <div className='form-container rounded bg-white'>
        <form >
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input type="text"  class="form-control" id="name" placeholder="Enter Name" required value={own.name} onChange={nameChangeHandler}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type="email"  class="form-control" id="Email" placeholder="Enter Email" required value={own.email} onChange={emailChangeHandler}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='contact'>Contact</label>
            <input type="text"  class="form-control" id="Contact" placeholder="Enter Contact" required value={own.contact} onChange={contactChangeHandler}
             />
          </div>   
          <br></br>      
          <div className='d-grid'>
            <button className='btn btn-primary'onClick={handleEditSubmit}>Update Owner</button>
          </div>
          </form>
          </div>
          </div>
        </>
    )}

{showAddOwn && (
        <>
        <h3 className='text-center'>Add Owner</h3>
        <div className='d-flex justify-content-center align-items-center 100-w'>
        <div className='form-container rounded bg-white'>
        <form >
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input type="text"  class="form-control" id="name" placeholder="Enter Name" required value={name} onChange={(event) => { setName(event.target.value); }}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type="email"  class="form-control" id="Email" placeholder="Enter Email" required value={email} onChange={(event) => { setEmail(event.target.value); }}
             />
          </div>
          <div className='mb-2'>
            <label htmlFor='contact'>Contact</label>
            <input type="text"  class="form-control" id="Contact" placeholder="Enter Contact" required value={contact} onChange={(event) => { setContact(event.target.value); }}
             />
          </div>   
          <br></br>      
          <div className='d-grid'>
            <button className='btn btn-primary'onClick={handleSubmit}>Add Owner</button>
          </div>
          </form>
          </div>
          </div>
        </>
    )}
    </div>
  )
}

export default AdminOwners