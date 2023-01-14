import "./app.css";
import React, { useState } from "react";
import NAV from './components/navbar';
import TxtForm from './components/textform';
import AboutForm from './components/formdarkmode';
import Alert from './components/alert';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {removebodyClasses} from "./components/colormode";

function App(){
  const [mode, setmode]= useState("light");
  const togglemode= ()=>{
      removebodyClasses();
      if(mode === "light"){
        setmode("dark");
        document.body.style.backgroundColor= "rgb(28, 38, 77)";
        showAlert("DarkMode Enabled","Success!!!","success");
        let n=document.getElementsByClassName("txtform-btn").length;
            for(let i=0; i<n; i++){
                document.getElementsByClassName("txtform-btn")[i].classList.remove("btn-warning");
                document.getElementsByClassName("txtform-btn")[i].classList.add("btn-primary");
            }
      }
      else{
        setmode("light");
        document.body.style.backgroundColor= "rgb(217, 218, 219)";
        showAlert("LightMode Enabled","Success!!!","success");
        let n=document.getElementsByClassName("txtform-btn").length;
            for(let i=0; i<n; i++){
                document.getElementsByClassName("txtform-btn")[i].classList.remove("btn-warning");
                document.getElementsByClassName("txtform-btn")[i].classList.add("btn-primary");
            }
      }
  }

  const [alert, setAlert]= useState(null);
  const showAlert= (msg, head, typ)=>{
    setAlert({message: msg, heading: head, type: typ});
    setTimeout(() => {
      setAlert(null);
    }, 2000); //2sec
  }
  return (
    <>
      <Router> 
        <NAV title="Forms & Themes" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={  
            <div className="container">
            <TxtForm brief="Enter the text to Convert to UpperCase" heading="This is my Heading" mode={mode} alert={showAlert}/>
            </div>
          }/> 
          <Route exact path="/aboutform" element={<AboutForm mode={mode}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;