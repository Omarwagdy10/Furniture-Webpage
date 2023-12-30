import React from "react";
import "./../comp/style/Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import img5 from "./../img/pexels-alem-sánchez-1562954.jpg";
import img4 from "./../img/pexels-tembela-bohle-1884584.jpg";
import img3 from "./../img/pexels-terje-sollie-298864.jpg";
function Carousele() {
  return (
    <div className="Carousele">
      <Carousel className="Carousele">


        <Carousel.Item className="Carousel-item">
          <img src={img5} alt=""/>


            <div className="Carousel-Caption1">
            <h3>Sofa Collection</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Phasellus blandit massa enim . Nullam id varius nunc id varius nunc.</p>
            <button> <span>Shop Now</span> </button>
            </div>
          
        </Carousel.Item>

        <Carousel.Item className="Carousel-item">
        <div className="Carousel-img">

          <img src={img4} alt=""/>
        </div>

          <div className="Carousel-Caption1">
            <h3>Wooden Chair Collection</h3>
            <p>Get up to 50% off Today Only!</p>
            <button> <span>Shop Now</span> </button>
            </div>
        </Carousel.Item>

        <Carousel.Item className="Carousel-item">
          <img src={img3} alt=""/>

          <div className="Carousel-Caption1">
            <h3>Living Room Collection</h3>
            <p>Taking your Viewing Experience to Next Level.</p>
            <button> <span>Shop Now</span> </button>
            </div>
        </Carousel.Item>


      </Carousel>
    </div>
  );
}

export default Carousele;
