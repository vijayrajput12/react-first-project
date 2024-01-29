import React, { useState } from "react";

export default function Contact(){
    const[data,setdata]=useState({
        Fullname:'',
        phone:'',
        Email:'',
        msg:''

    })
    const inputEvent=(event)=>{
        const {name,value}=event.target
        setdata((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        alert(` my name is ${data.Fullname} my Email is ${data.Email} my Phone number is${data.phone} and here is what i want to say ${data.msg}`)
    }
    
    return(
        <>
       <div className="my-5">
        <h1 className="text-center">Contact Us</h1>

       </div>
       <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">



     <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleInputName">Fullname</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="NamelHelp" name="Fullname" value={data.Fullname} onChange={inputEvent} placeholder="Enter Name"/>
    
  </div>

  <div class="form-group">
    <label for="exampleInputNumber">Number</label>
    <input type="number" maxLength='4' class="form-control" id="exampleInputNumber" aria-describedby="NumberlHelp" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Number"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email" value={data.Email} onChange={inputEvent} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  

  <div class="form-group">
    <label for="exampleInputMassage">Massage</label>
    <textarea className="w-100 b-none outline-none" id="exampleInputMassage"  name="msg" value={data.msg} onChange={inputEvent} ></textarea>
 
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        </div>
       </div>
        </>
    )
}