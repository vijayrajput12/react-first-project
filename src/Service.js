import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
export default function Service(){
    return(
        <>
           <div className="my-5">
       <h1 className="text-center">Our services</h1>
       </div>
        <div className="container-fluid nav_bg">
        <div className='row'>
            <div className='col-10 mx-auto'>
            <div className="row gy-4">

            {
              Sdata.map((val,ind)=>{
                return <Card
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                />
              })
            }
           {/* {
            Sdata.map((val,ind)=>{
                return <Card 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                />
            })
           } */}
            </div>
            </div>
        </div>
    </div>
        
        

        </>
    )
}