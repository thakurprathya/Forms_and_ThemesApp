import React from 'react';
import PropTypes from 'prop-types';
import Colormode from './colormode';
import { Link } from 'react-router-dom';


export default function Navbar(props){
  return (
    <>
        {/* including bootstrap navbar and making changes to it for acceptance in jsx */}
        <nav className={`navbar navbar-expand-lg bg-${props.mode==="dark"?"black":"light"}`}>
            <div className="container-fluid" style={{display:"flex", justifyContent:"flex-start"}}>
                <Link className={`navbar-brand text-${props.mode==="dark"?"light":"dark"}`} to="/" 
                   style={{fontWeight:"bold", fontSize:"25px"}}>{props.title}</Link>
                <Link className={`nav-item nav-link mx-2 text-${props.mode==="dark"?"light":"dark"}`} to="/">TextForm</Link>
                <Link className={`nav-item nav-link mx-2 text-${props.mode==="dark"?"light":"dark"}`} to="/aboutform">AboutForm</Link>
            </div>
            <Colormode/>
            <div className="form-check form-switch mx-5">
              <input className="form-check-input" type="checkbox" role="switch" id="modeswitch" onClick={props.togglemode}/>
              <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} htmlFor="modeswitch">
                {`Enable${props.mode==="dark"?"Lightmode":"Darkmode"}`}
              </label>
            </div>
        </nav>
  </>
  )
}

// Navbar.propTypes= {title: PropTypes.string};  //we define the proptypes which set type of title as string
Navbar.propTypes= {title: PropTypes.string.isRequired};  //is required makes it necessary for us to provide with title, default props will work
Navbar.defaultProps= {title: "Set title here"};  //setting default props if we donot provide it with props this will print
