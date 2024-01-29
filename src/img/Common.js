import React from "react";


import { NavLink } from "react-router-dom";

export default function Home(props){
    return(
        <>
       <section id="header" className="d-flex align-item-center">
       <div className="container-fluid ">
        <div className='row'>
            <div className='col-10 mx-auto  my-5'>
           <div className="row">
            <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column " >
                <h1>
                {props.name}
                <strong className="brand-name"> Vijay singh shekhawat</strong></h1>
                <h2 className="my-3">
                we are the team of talented developer making website
                </h2>
                <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                </div>
            </div>
            <div className="col-lg-6 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid animate"  alt="Home img"/>
            </div>
            </div>
            </div>
        </div>
    </div>
       </section>
        </>
    )
}
