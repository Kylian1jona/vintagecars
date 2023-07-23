import React from "react";
import Navbar from "./Navbar";

function Home()
{
return(
      <>
     <Navbar/>
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://cdn.images.express.co.uk/img/dynamic/79/590x/XXXTentacion-dead-976266.jpg?r=1533662195714" className="d-block w-100" alt="..." height="600" width="100%"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>BMW i8</h5>
        <p>One of the rarest car in the wrld owned by XXXTentacion</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://cdn.carhp.com/images/content/15a7bbd93b84f502ce48d4c1d9c2764e.png?mode=crop&overlay=https://cdn.carhp.com/images/carhp_logo_white.png&overlay_width_pct=0.055555555555556&overlay_top=10&overlay_left=10" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Chevrolet Corvette</h5>
        <p>One of the fastest in the wrld owned by juice wrld</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://showroom-assets.tradingpaints.gg/pics/455388_1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  
      </>
      );
}
export default Home;