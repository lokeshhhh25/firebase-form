
import React, { useState } from 'react';
import './form.css';

const Reactcontact = () => {
   const[user,setUser]=useState({
    name: "",
    email: "",
    password: "",
    checkbox:"",
   });
        let name ,value;
   const getUserData=(event)=>{
    name = event.target.name;
    value= event.target.value;

       setUser({ ...user,[name]:value});
   };
 
    const postData= async(e)=>{
         e.preventDefault();

         const {name,email,password,checkbox}=user;

        const res = await fetch("https://form-4b04d-default-rtdb.firebaseio.com/form.json" , {
          method:"POST",
          headers: {
            "content-type":"application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password,
            checkbox ,
          })
        }) ;  
        if(res){
          setUser({
            name: "",
            email: "",
            password: "",
            checkbox:"",

        } );
        alert("data stored");
      }
    };
  return (
    <>
    <form  method='POST'>
      <div className='formbox'>
      <div class="mb-3">
    <label for="exampleInputName1" class="form-label">Name</label>
    <input 
    type="text" 
    name='name'
    className='input100'
    autoComplete='off'
    value={user.name}
    onChange={getUserData}
    class="form-control" 
    id="exampleInputName1" 
    aria-describedby="nameHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input 
    type="email" 
    name='email'
    value={user.email}
    onChange={getUserData}
    autoComplete='off'
    className='input100'
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" />

    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input 
    type="password"
    value={user.password}
    onChange={getUserData}
    name='password'
    autoComplete='off'
    className='input100'
     class="form-control"
      id="exampleInputPassword1"
       />
  </div>
  <div class="mb-3 form-check">
    <input
     type="checkbox" 
     name='checkbox'
     class="form-check-input" 
     id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={postData}>Submit</button>

      </div>
    
</form>
    </>
  );
};

export default Reactcontact;