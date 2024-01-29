import React from "react";
import { NavLink } from "react-router-dom";


export default function Card(props){
    return(
        <>
       <div className="container-fluid mb-5 ">
        <div className='row '>
            <div className='col-10 mx-auto'>

            <div className="row">
                <div className="col-md-4 col-10 mx-auto  card1 ">
                <div class="card d-flex " >
  <img class="card-img-top card1" src={props.imgsrc} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
                </div>
            </div>
            </div>
        </div>
    </div>
        </>
    )
}