import React from 'react'

export const removebodyClasses= ()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
}

export default function Colormode(){
    const togglemode= (clss)=>{
        removebodyClasses();  //if we donot run this after setting one color and moving to other it will only add classes
        document.body.classList.add("bg-"+clss);
        if(clss==="primary"){
            let n=document.getElementsByClassName("txtform-btn").length;
            for(let i=0; i<n; i++){
                document.getElementsByClassName("txtform-btn")[i].classList.remove("btn-primary");
                document.getElementsByClassName("txtform-btn")[i].classList.add("btn-warning");
            }
        }
        else{
            let n=document.getElementsByClassName("txtform-btn").length;
            for(let i=0; i<n; i++){
                document.getElementsByClassName("txtform-btn")[i].classList.remove("btn-warning");
                document.getElementsByClassName("txtform-btn")[i].classList.add("btn-primary");
            }
        }
    }
    return (
        <div className='d-flex mb-3 mt-2' style={{marginLeft:"20vw"}}>
            {/* passing function to onClick rather than function call */}
            <div className="bg-primary rounded mx-1" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>togglemode("primary")}></div>
            <div className="bg-secondary rounded mx-1" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>togglemode("secondary")}></div>
            <div className="bg-success rounded mx-1" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>togglemode("success")}></div>
            <div className="bg-danger rounded mx-1" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>togglemode("danger")}></div>
            <div className="bg-warning rounded mx-1" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>togglemode("warning")}></div>
        </div>
    )
}
