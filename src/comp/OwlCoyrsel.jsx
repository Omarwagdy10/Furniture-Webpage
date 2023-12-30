import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "./../img/courselimg/furniture_img1.jpg";
import img2 from "./../img/courselimg/furniture_img2.jpg";
import img3 from "./../img/courselimg/furniture_img3.jpg";
import img4 from "./../img/courselimg/furniture_img4.jpg";
import img5 from "./../img/courselimg/furniture_img5.jpg";
import img6 from "./../img/courselimg/furniture_img6.jpg";
import img7 from "./../img/1_tAZ0DsBYgXTsn2BBLxlIIg.png";
import { TbArrowsShuffle } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import "./../comp/style/OwlCarousel.css";
import './style/Media.css'


function OwlCoyrsel() {
  return (
    <div>
      <div>
        <div class="container cont1">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 h1">
           <p> Trending Items</p>
            </div>
          </div>
        </div>

        <div class="container-fluid cont1">
          <OwlCarousel items={4} className="owl-theme" loop nav margin={0}  autoplay ={true}>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img1} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img2} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img3} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img4} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img5} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img6} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

          </OwlCarousel>
        </div>
      </div>



      <div className="cont2">
        <div class="container cont2 ">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 h1">
            Trending Items
            <span className="spanH1"></span>
            </div>
          </div>
        </div>

        <div class="container-fluid cont2">
          <OwlCarousel items={2} className="owl-theme" loop nav margin={2}  autoplay ={true}>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img1} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img2} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img3} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img4} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img5} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img6} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

          </OwlCarousel>
        </div>
      </div>


      <div className="cont3">
        <div class="container cont3">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 h1">
            Trending Items
            <span className="spanH1"></span>
            </div>
          </div>
        </div>

        <div class="container-fluid cont3" >
          <OwlCarousel items={1} className="owl-theme" loop nav margin={2}  autoplay ={true}>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img1} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img2} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img3} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img4} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img5} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

            <div className="Owl-container">
         
            <div className="img">
              <img src={img6} alt="" />

              <div className="card-icon">
                  <div className="circle">
                    <TbArrowsShuffle className="shuffle" />
                  </div>
                  <div className="circle">
                    <FaRegHeart className="heart" />
                  </div>
                  <div className="circle">
                    <CiUser className="user" />
                  </div>
                </div>

            </div>
              <div className="Owl-data">
                <h4>Many Desktop Publishing</h4>

                <div className="Price">
                <h5>$68.00</h5>
                <h6>
                  {" "}
                  $99.00
                  <span></span>
                </h6>
              </div>

              <div className="star-rate">
                <img src={img7} alt="" />
                <p>(25)</p>

                <div className="Owl-button">
                <button>Add to Card</button>

                </div>

                </div>

              </div>


            </div>

          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default OwlCoyrsel;
