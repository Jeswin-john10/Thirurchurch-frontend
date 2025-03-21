import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'; 
import { Link } from 'react-router-dom';
function Header() {
  
  return (
    <div>
        <Navbar style={{position:"fixed" ,width:"100%" ,zIndex:"5"}}  expand="lg" className="bg-dark w-full" >
        <Container>
          <Navbar.Brand href="" className='shadow text-light fs-1'>Karunyanidhi</Navbar.Brand>
    <div>
     
              <Link to={'/'}> <button className='btn border p-2 rounded shadow text-light me-2'>Dashboard</button></Link>

<Link to={'/Login'}><button className='btn border p-2 rounded shadow text-light me-2'>Admin Panel</button>
</Link>





    </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header