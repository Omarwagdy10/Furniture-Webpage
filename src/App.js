import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './comp/Navbar';
import Products from './comp/Products';
import Cart from './comp/Cart';
// import Navbar2 from './comp/Navbar2';
import Carousele from './comp/Carousel';
import NewCollection from './comp/NewCollection';
import WhatWeDo from './comp/WhatWeDo';
import OwlCoyrsel from './comp/OwlCoyrsel';
import OwlCoursel2 from './comp/OwlCoursel2';
import Owlcoursel3 from './comp/Owlcoursel3';
import Footer from './comp/Footer';
import LoginPage from './comp/LoginPage';
import './comp/style/Media.css'



function App() {
  return (
<div>

      <Navbarr></Navbarr>

      <Carousele></Carousele>
      <WhatWeDo></WhatWeDo>
      <LoginPage></LoginPage>
      <Routes>
      <Route path='/' element={<Products></Products>}></Route>
      <Route path='/Cart' element={<Cart></Cart>}></Route>

      </Routes>
      <NewCollection></NewCollection>
      <OwlCoyrsel></OwlCoyrsel>
      <OwlCoursel2></OwlCoursel2>
      <Owlcoursel3></Owlcoursel3>
      <Footer></Footer>



</div>
    

  
  );
}

export default App;
