import React, {useState, useContext } from "react";
import './ContextAPI.css'

const employeeContext=React.createContext();

function ContextAPI(){

  const [employee,setEmployee]=useState(
    { 
      Id:1,
      Name:'Vinay',
      Location:'Bangalore',
      Salary:20000
    },
    );
  return(
    <div className="employee">
      <employeeContext.Provider value={employee}>
          <Employee />
      </employeeContext.Provider>      
    </div>
  );
}

function Employee(){
  let context=useContext(employeeContext);

  return(
    <div className="employee">
      <h2 style={{color:"blue"}}>Welcome to Employee Data...</h2>
      <p>
        <label>Employee ID : <b>{context.Id}</b></label>
      </p>
      <p>
        <label>Employee Name : <b>{context.Name}</b></label>
      </p>
      <p>
        <label>Employee Location : <b>{context.Location}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{context.Salary}</b></label>
      </p>
    </div>
    
  );
}

export default ContextAPI;