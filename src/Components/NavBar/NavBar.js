
// import "./NavBar.css"


// import { FaFacebook,FaGoogle} from 'react-icons/fa';


// export default function NavBar(){
//     return(
// <>
//         <nav className="navbar navbar-expand-lg Nav--bar row">
//         <div className="container-fluid">

//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 kx
//               </li>
//               <li className="nav-item">

//               </li>
//               <li className="nav-item">
//                 kldcn
//               </li><li className="nav-item">
//                 cmn
//               </li><li className="nav-item">
//               </li>


//             </ul>
//             <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success me-5" type="submit">Search</button>
//             </form>
//             <div>
//               <button type="button" className="btn btn-secondary me-2">LogIn</button>
//               <button type="button" className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">SignUp</button>
              
//             </div>

//           </div>
//         </div>
//       </nav>
      
//       {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               ...
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" class="btn btn-primary">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//          <div className="carddd card" >
//   <div className="row g-0 ">
//     <div className="col-md-6 Signup-form">
//         <div className="card-body ">
//         <h4 className="card-title card-tittle">Sign Up</h4>
//         </div>
//         <div className='forms'>
// <div >
//   <label for="username" class="form-label">Name*</label>
//   <input type="text" class="form-control" id="username" placeholder="Steve Jobs"/>
// </div>
// <div >
//   <label for="email" class="form-label">Email*</label>
//   <input type="email" class="form-control" id="email" placeholder="jobs@example.com"/>
// </div>
// <div >
//   <label for="password" class="form-label">Password*</label>
//   <input type="password" class="form-control" id="password" placeholder="**********"/>
// </div>
// <div >
//   <label for="retype password" class="form-label">Re-Type Password*</label>
//   <input type="password" class="form-control" id="retype password" placeholder="**********"/>
// </div>
// <div className="form-check">
//   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//   <label class="form-check-label" for="flexCheckDefault">
//   By Clicking the button your are agreeing to term and serveces of our company
//   </label>
// </div>
// <button className="btn btn-primary btn-signup" type="submit">SignUp</button>

// </div>
// <hr className='line'></hr>
// <div>
// <button className="btn btn-primary btn-signupgoogle" type="submit"><FaGoogle/>  Continue with Google</button>
// <button className="btn btn-primary btn-signupfacebook" type="submit"><FaFacebook/> Continue with Facebook</button>
// </div>



        
      
//     </div>
//     <div className="col-md-6 ">    
//     <img src="./resources/dominik.webp" className="img-fluid rounded-start signup-image" alt="..."/>
//     <button type="button" className="btn-close btn-close-white"  data-bs-dismiss="modal" aria-label="Close"></button>
    

//     </div>
//   </div>
// </div>
//         </div>
//       </>

//     )
// }
import './NavBar.css'
import SignUp from '../../Pages/SignUp/SignUp';
import LogIn from '../../Pages/LogIn/LogIn'

import '../../Pages/SignUp/SignUp.css';
import '../../Pages/LogIn/LogIn.css'




import React from "react";
import { Navbar, Nav,Form, Container,  Button   } from "react-bootstrap" 

import {Link} from "react-router-dom";






export default function NavBar(){
  const [LoginShow, setloginShow] = React.useState(false);
  const [SignupShow, setSignupShow] = React.useState(false);
  return(
    <>
    <Navbar bg="light" expand="lg"  className="Nav--bar row navbar">
      <Container className="container-fluid">
        <Navbar.Brand >
        <Link to='/'>
                    <img src="./Resources/nav_logo.webp"  alt="logo" className='nav-logo'></img>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0 nav-text"  
          >
            <Link
                className='me-3 text-end font-face-reg nav-link nav-itm nav-pages'
                to='/'
              >
                Home
              </Link>
              <Link
                className='me-3 text-end font-face-reg nav-link nav-itm nav-pages'
                to='/Learning'
              >
                Learning
              </Link>
              <Link
                className='me-3 text-end font-face-reg nav-link nav-itm nav-pages'
                to='/Maps'
              >
                Maps
              </Link>
              <Link
                className='me-3 text-end font-face-reg nav-link nav-itm nav-pages'
                to='/Forum'
              >
                Forum
              </Link>
              <Link
                className='me-3 text-end font-face-reg nav-link nav-itm nav-pages'
                to='/Ecomerce'
              >
                Ecomerce
              </Link>
              <Link
                className='me-3 text-end font-face-reg nav-link nav-itm nav-pages'
                to='/BirdRecognition'
              >
                Bird Recognition
              </Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-5">Search</Button>
          </Form>
          <div>
              <button type="button" className="btn btn-secondary me-2"onClick={() => setloginShow(true)}>LogIn</button>
              < LogIn
        show={LoginShow}
        onHide={() => setloginShow(false)}/>
              
             <button type="button" className="btn btn-primary me-3" onClick={() => setSignupShow(true)}>SignUp</button>
             < SignUp
        show={SignupShow}
        onHide={() => setSignupShow(false)}/>
              
          </div>
          {/* <Button variant="Secondary"  className="me-2"onClick={() => setModalShow(true)}>
        LogIn 
      </Button>

      < SignUp
        show={modalShow}
        onHide={() => setModalShow(false)}/>
           <Button variant="primary" onClick={() => setModalShow(true)}>
        SignUp
      </Button>

      < SignUp
        show={modalShow}
        onHide={() => setModalShow(false)}/> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="carddd card" >
  <div className="row g-0 ">
    <div className="col-md-6 Signup-form">
        <div className="card-body ">
        <h4 className="card-title card-tittle">Sign Up</h4>
        </div>
        <div className='forms'>
<div >
  <label for="username" class="form-label">Name*</label>
  <input type="text" class="form-control" id="username" placeholder="Steve Jobs"/>
</div>
<div >
  <label for="email" class="form-label">Email*</label>
  <input type="email" class="form-control" id="email" placeholder="jobs@example.com"/>
</div>
<div >
  <label for="password" class="form-label">Password*</label>
  <input type="password" class="form-control" id="password" placeholder="**********"/>
</div>
<div >
  <label for="retype password" class="form-label">Re-Type Password*</label>
  <input type="password" class="form-control" id="retype password" placeholder="**********"/>
</div>
<div className="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  By Clicking the button your are agreeing to term and serveces of our company
  </label>
</div>
<button className="btn btn-primary btn-signup" type="submit">SignUp</button>

</div>
<hr className='line'></hr>
<div>
<button className="btn btn-primary btn-signupgoogle" type="submit">  Continue with Google</button>
<button className="btn btn-primary btn-signupfacebook" type="submit"> Continue with Facebook</button>
</div>



        
      
    </div>
    <div className="col-md-6 ">    
    <img src="./resources/dominik.webp" className="img-fluid rounded-start signup-image" alt="..."/>
    <button type="button" className="btn-close btn-close-white"  data-bs-dismiss="modal" aria-label="Close"></button>
    

    </div>
  </div>
</div>
        </div> */}
    </>
    
  )
}