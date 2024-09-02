import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "./../img/courselimg2/furniture_insta1.jpg";
import img2 from "./../img/courselimg2/furniture_insta2.jpg";
import img3 from "./../img/courselimg2/furniture_insta3.jpg";
import img5 from "./../img/courselimg2/furniture_insta4.jpg";
import img6 from "./../img/courselimg2/furniture_insta6.jpg";













function OwlCoursel2() {
  return (
    <div>
      <div>

        <div class="container-fluid cont1">

            <div className='insta'>
            <h2>Instagram</h2>
            <p>@shoppingzone</p>
            </div>

          <OwlCarousel items={6} className="owl-theme2" loop nav margin={2}  autoplay ={true}>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img1} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img2} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img3} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img5} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img6} alt="" />

            </div>



            </div>

          </OwlCarousel>
        </div>
        <div class="container-fluid cont2">

            <div className='insta'>
            <h2>Instagram</h2>
            <p>@shoppingzone</p>
            </div>

          <OwlCarousel items={3} className="owl-theme2" loop nav margin={2}  autoplay ={true}>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img1} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img2} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img3} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img5} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img6} alt="" />

            </div>



            </div>

          </OwlCarousel>
        </div>
        <div class="container-fluid cont3">

            <div className='insta'>
            <h2>Instagram</h2>
            <p>@shoppingzone</p>
            </div>

          <OwlCarousel items={2} className="owl-theme2" loop nav margin={2}  autoplay ={true}>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img1} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img2} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img3} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img5} alt="" />

    
            </div>



            </div>

            <div className="Owl-container2">
         
            <div className="img">
              <img src={img6} alt="" />

            </div>



            </div>

          </OwlCarousel>
        </div>


        
      </div>
    </div>
  )
}

export default OwlCoursel2