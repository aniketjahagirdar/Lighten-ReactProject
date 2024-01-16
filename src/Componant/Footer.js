import React from 'react'
import '../Componant/css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer id='footer' className='bg-dark pt-3 pb-5 text-white'>
        <div className="container"> 
          <div className='Icons mt-3 mb-5'>
            <ul className='d-flex gap-lg-5 gap-3 mb-0 justify-content-center w-100'>
              <li className='list-unstyled'><Link to='#' className='text-decoration-none text-white '><i class="bi bi-facebook"></i></Link></li>
              <li className='list-unstyled'><Link to='#' className='text-decoration-none text-white'><i class="bi bi-twitter-x"></i></Link></li>
              <li className='list-unstyled'><Link to='#' className='text-decoration-none text-white'><i class="bi bi-instagram"></i></Link></li>
              <li className='list-unstyled'><Link to='#' className='text-decoration-none text-white'><i class="bi bi-linkedin"></i></Link></li>
            </ul>
          </div>
          <div className='row'>
            <div className='col-lg-3'>
              <h5 className=''>Contact Us</h5>
              <address className='pe-5'>123 Second Street Fifth Avenue,
                Manhattan, New York</address>
              <mobile>+987 654 3210</mobile>
            </div>
            <div className='col-lg-3 mt-3 mt-lg-0'>
              <h5>ADDITIONAL LINKS</h5>
              <ul className='footer-links ps-0'>
                <li className='list-unstyled'><Link to="/About" className='text-decoration-none text-white'>About Us</Link></li>
                <li className='list-unstyled'><Link to="" className='text-decoration-none text-white'>Terms and conditions</Link></li>
                <li className='list-unstyled'><Link to="" className='text-decoration-none text-white'>Privacy policy</Link></li>
                <li className='list-unstyled'><Link to="" className='text-decoration-none text-white'>News</Link></li>
                <li className='list-unstyled'><Link to="" className='text-decoration-none text-white'>Contact us</Link></li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <h5>SERVICE</h5>
              <ul className='ps-0'>
                <li className='list-unstyled'><Link to="" className='text-decoration-none text-white'>Data recovery</Link></li>
                <li className='list-unstyled'><Link to="" className='text-decoration-none text-white'>Computer repair</Link></li>
                <li className='list-unstyled'><Link to="" className='text-decoration-none text-white'>Mobile service</Link></li>
                <li className='list-unstyled'><Link to="" className='text-decoration-none text-white'>Network solutions</Link></li>
                <li className='list-unstyled'><Link to="" className='text-decoration-none text-white'>Technical support</Link></li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <h5>ABOUT LIGHTEN</h5>
              <information className="pe-5">
              Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices,
              </information>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer