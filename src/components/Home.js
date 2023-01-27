import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserPlus, FaUserEdit, FaRegTrashAlt, IconName } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const history = useNavigate();
  const handleDelete=(id)=>{
    alert('Deleted')
    let index = Employee.map(item=>item.id).indexOf(id);
    Employee.splice(index,1);
    console.log(Employee);
    history('/');

  }
  const handleEdit=(id,uname,age,desg,salary)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("uname",uname);
    localStorage.setItem("age",age);
    localStorage.setItem("desg",desg);
    localStorage.setItem("salary",JSON.stringify(salary));
  }
  return (
    <div>
      <h1 className="text-info text-center mt-5">Employee Management</h1>
      <p>An employee management system is a distributed system developed to maintain the employee details and the company workflow process systematically.
        EMS helps to eliminate the manual process and saves a lot of time and money. 
        This system maintains the professional and personal details of the employees and the company in a safe manner. 
        The employee management system lowers the burden and the pressure on HRs and the business managers. 
        Thanks to the technology which offers us a plethora of solutions which makes the work easier and faster.</p>
      <Link to={'/add'}>
      <Button className='btn btn-info'>Add <FaUserPlus/></Button>
      </Link>
      
      <h3 className='mt-5 text-center'>List of Employees</h3>
      <Table className='mt-5' striped bordered hover>
        <thead>
          <tr>
            <th>User name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Employee && Employee.length > 0 ?
              Employee.map((item) => (
                <tr>
                  <td> {item.uname} </td>
                  <td> {item.age} </td>
                  <td> {item.desg} </td>
                  <td> {item.salary} </td>
                  <td>
                  <Link to={'/edit'}>
                   <Button onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)}><FaUserEdit/></Button> 
                  </Link>
                  
                    <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FaRegTrashAlt/></Button> </td>
                </tr>
              )) : 'Error'
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Home