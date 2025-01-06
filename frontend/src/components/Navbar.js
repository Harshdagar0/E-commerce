import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  let [logindeails, setlogindeails] = useState(JSON.parse(localStorage.getItem("login")));   

  function send() {
    localStorage.removeItem("login");
    document.getElementById("slider").style.display = "none";

  };
  function click2(){
    document.getElementById("slider").style.display = "none";
  }   
   
  function Login() {
    return (
      <NavLink className="nav-link active p-1 mt-1 mx-2 text-center"  style={{ borderRadius: "10px", color: "white", backgroundColor: "black",width:"60px" }} aria-current="page" to="/login" onClick={click2}>Login</NavLink>)
  };
  function Logout() {
    return (
      <a className="nav-link active p-1 mt-1 mx-2 text-center" style={{ borderRadius: "10px", color: "white", backgroundColor: "red",width:"60px" }} aria-current="page" href="/" onClick={send}>Logout</a>
    )
  };
  function click(){
    document.getElementById("slider").style.display = "flex";
   }
 
  return (
      <div className="container d-flex mt-2 ">
        <a className='text-decoration-none text-dark pt-2 fs-5 '   href="/">General Store</a>
              <div className='d-lg-flex hidden ' id='link' style={{position:"absolute",right:"0",marginRight:"100px"}}>
              <NavLink className="nav-link navitem"  aria-current="page" to="/">Home</NavLink>
              <NavLink className="nav-link navitem" aria-current="page" to="/about">About</NavLink>
              <NavLink className="nav-link navitem" aria-current="page" to="/products">Products</NavLink>
              <NavLink className="nav-link navitem" aria-current="page" to="/contact">Contact</NavLink>
            {logindeails ?
            <span class="nav-item d-lg-flex "  style={{width:"20px"}}  >
              <NavLink className="nav-link navitem" aria-current="page" to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
              <Logout />
            </span>
             :
             <span className="nav-item">
                <Login />
              </span>
            }
            </div>
            <div className='col link2  'id='slider'>
              <i className="fa-solid fa-circle-xmark " id='cross' style={{cursor:"pointer",fontSize:"25px"}}  onClick={click2}></i><br></br>
              <NavLink className="nav-link navitem"  aria-current="page" onClick={click2}  to="/">Home</NavLink>
              <NavLink className="nav-link navitem" aria-current="page"  onClick={click2} to="/about">About</NavLink>
              <NavLink className="nav-link navitem" aria-current="page"  onClick={click2} to="/products">Products</NavLink>
              <NavLink className="nav-link navitem" aria-current="page"  onClick={click2} to="/contact">Contact</NavLink>
            {logindeails ?
            <span className="nav-item d-lg-flex "  style={{width:"20px"}}  >
              <NavLink className="nav-link navitem" aria-current="page" onClick={click2} to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
              <Logout />
            </span>
             :
             <span className="nav-item">
                <Login onClick={click2} />
              </span>
            }
            </div>
            <i className="fa-solid fa-bars  hide show mt-3 " id='menu' style={{cursor:"pointer",fontSize:"20px"}}   onClick={click} ></i>
             
             



        </div> 



  )
}

export default Navbar;