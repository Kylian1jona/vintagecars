import React from "react";
import Navbar from "./Navbar";
function Services()
{
    return(
<>
<Navbar/>
<div style={{backgroundImage:'url(https://img.freepik.com/premium-photo/black-asphalt-floor-road-texture-background_44706-1079.jpg)', height:'250px', width:'100%'}}>
  <center><h1 className="text-white">Services</h1></center>
<div className="card-group">
  <div className="card">
    <div className="card-body text-center text-light bg-dark">
      <img src="https://as2.ftcdn.net/v2/jpg/02/76/68/91/1000_F_276689110_qwLu5s0j9iB1nrPM7ks6rCf7hTzjx15d.jpg" height="150px" width="150px"/>  
    <h3>Repairs</h3>
    <p>General Repairs,<br/>
Specialist Repairs<br/>
 & Vintage Parts</p>
    </div>
  </div>
  <div className="card">
    <div className="card-body text-center text-light bg-dark">
     <img src="https://www.shutterstock.com/image-vector/white-key-icon-vector-illustration-260nw-419535574.jpg" height="150px" width="150px"/>  
     <h3>Upholstery</h3>
    <p>A Range of Fabrics, Including Vintage Leathers, & Wide Variety of Colors</p> 
    </div>
  </div>
  <div className="card">
    <div className="card-body text-center text-light bg-dark">
        <img src="https://i.pinimg.com/originals/83/f2/82/83f282eb7a228257402e921b9612dc26.png" height="150px" width="150px"/>
        <h3>Paintwork</h3>
        <p>Spray paint, Custom Stencilling & Variety of Custom Made Artwork</p>
    </div>
  </div>
</div>
</div>
<br/><br/><br/><br/><br/>
</>
    );
}
export default Services;