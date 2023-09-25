import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from './pages/Register/Register';
import About from './pages/About/About';
import Home from './pages/home/Home';
import Navbar from './Component/Navbar/Navbar';
import Signin from './pages/signin/Signin';
import RegisterAdmin from './pages/Register/RegisterAdmin';
import Profile from './pages/Profile/Profile';
import EditProfile from './Component/EditProfile/EditProfile';
import Editpassword from'./Component/EditProfile/Editpassword';
import Error from './pages/Error/Error';
import Products from './pages/Products/Product';
import {useSelector} from "react-redux"
import AddProduct from"./pages/AddProduct/AddProduct"
import { useState } from 'react';
import "./App.css";
import Description from './pages/DescriptionProduct/Description';
import AddOrder from './pages/AddOrder/AddOrder';
import Order from './pages/Order/Order';








function App() {
 //const allowedAdminId = "6500ad79f959769b7043502a"; 
 //const user = useSelector((state) => state.userReducer.user);
 const listproducts = useSelector((state) => state.productReducer.listProducts
 );
 const [inputSearch, setInputSearch] = useState("");
 const filtredProducts = listproducts.filter((product) =>
   product.name.toLowerCase().includes(inputSearch.toLowerCase())
 );


  
  return (
         <div  className="v7">

      <Navbar   inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <div className="v8">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error/>}/>
        <Route path='/products' element={<Products filtredProducts={filtredProducts}  />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<Signin />} />
        <Route path="/Admin" element={<RegisterAdmin />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/edit/:id" element={<EditProfile />} />
        <Route path="/description/:id" element={<Description/>} />

        <Route path="/editpassword/:id" element={<Editpassword />} />

    <Route path="/addproduct" element={<AddProduct/>} /> 

   <Route path="/AllOrders" element={<Order />} />: null 


    <Route path="/addorder/:id" element={<AddOrder />} />


        
      </Routes>
      </div>
      
      </div>
  );
}

export default App;
