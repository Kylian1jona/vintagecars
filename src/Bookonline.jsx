import React from "react";
import Navbar from "./Navbar";
function Bookonline()
{
    return(
<>
<Navbar/>
<br/><br/><br/><br/>
<center><h1>Book Online</h1></center>
<hr/>
<br/><br/>
<div className="card-group">
    <div className="card text-center">
        <div className="card-body text-center">
<img src="https://media.istockphoto.com/id/462970733/photo/blue-classic-vintage-car-interior.jpg?s=612x612&w=0&k=20&c=c_bZW9RYTctzzExF5MSasMXmIvmTRn-ofnLPRH-MKgw=" height="300px" width="100%"/>
        </div>
    </div>
    <div className="card text-center">
        <div className="card-body text-center">
        <br/><br/><br/>
          <h3>Style My Ride-Consultation</h3>
          <br/><br/><br/>
<p>2 hrs</p>
<p>$100</p><br/>
<button type="button" className="btn btn-dark">BOOK NOW</button>
        </div>
    </div>
</div>
</>
    );
}
export default Bookonline;