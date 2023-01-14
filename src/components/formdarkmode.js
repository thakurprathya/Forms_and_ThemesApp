import React, {useState} from 'react'

const DarkStyle={ color: "white", backgroundColor: "black", border:"4px solid white"};
const LightStyle={ color: "black", backgroundColor: "white", border:"4px solid black" };

export default function DarkModeForm() {
    const [CurrentStyle, setStyle]= useState(LightStyle);
    const [BtnStyle, setBtnStyle]= useState({height:"8vh",backgroundColor:"black",color:"white",display:"inline-block"});
    const [BtnTxt, setBtnTxt]= useState("Enable Dark Mode");

    const toggleStyle= ()=>{
        if(CurrentStyle.color === "black"){
            setStyle(DarkStyle); setBtnStyle({height:"8vh",backgroundColor:"white",color:"black",display:"inline-block"}); 
            setBtnTxt("Enable Light Mode"); 
            }
        else{
            setStyle(LightStyle); setBtnStyle({height:"8vh",backgroundColor:"black",color:"white",display:"inline-block"}); 
            setBtnTxt("Enable Dark Mode"); 
            }
    }
  return (
    <>
    <div className='container mb-3 mt-3' style={CurrentStyle}>
        <div className="heading mb-3" style={{display:"flex",alignItems:"center"}}>
            <h1 className='mt-3' style={{display:"inline-block"}}><b>About Us</b></h1>
            <div className="spacer" style={{width:"65vw"}}></div>
            <button className="btn" style={BtnStyle} onClick={toggleStyle}>{BtnTxt}</button>
        </div>
        <div className="accordion pb-4 px-2" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                aria-expanded="false" aria-controls="collapseOne"  style={CurrentStyle}>Accordion Item #1</button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={CurrentStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                 aria-expanded="false" aria-controls="collapseTwo" style={CurrentStyle}>Accordion Item #2</button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={CurrentStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                 aria-expanded="false" aria-controls="collapseThree" style={CurrentStyle}>Accordion Item #3</button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={CurrentStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
