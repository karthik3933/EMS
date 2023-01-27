
import React ,{useState,useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {
  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desg,setDesg]=useState('')
  const [salary,setSalary]=useState('0')

  let history=useNavigate()

  const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
    console.log(ids);
    let uniqueId = ids.slice(0,8)
    Employee.push({
      id:uniqueId,
      uname:uname,
      age:age,
      desg:desg,
      salary:salary
    })
    history('/')
  }
  return (
    <>
       <h1 className='text-primary text-center mt-5'> Add Employee Management</h1>
            <p className='text-center'>
                Employee management is easier said than done. And we all know it. Managing employees is the most challenging
                part of a manager’s day-to-day responsibilities. However, seeing as employees are crucial to your company’s success,
                management is something you have to get right.</p>
    
    <Row>
      <Col>
      <img  width={'800px'} height={'600px'} src='https://th.bing.com/th/id/OIP.-kK_l3YsSBzDtvt7lSaqkAHaFj?pid=ImgDet&rs=1'/>
      
      </Col>
      <Col>
      <Form>
     
  
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" 
        onChange={(e)=>setUname(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" 
        onChange={(e)=>setAge(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text"
        onChange={(e)=>setDesg(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" 
        onChange={(e)=>setSalary(e.target.value)}
        />
      </Form.Group>
      <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
        Add
      </Button>


      </Form>
      </Col>
    </Row>
    </>
  )
}

export default Add