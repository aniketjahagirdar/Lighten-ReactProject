import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <> 
      <div id="Header" className='position-sticky top-0 w-100 bg-white' style={{zIndex:"99"}}>
        <div className='Header-first pt-3 pb-3 d-none d-lg-block'>
          <div className='container'>
            <div className='icons-section d-flex justify-content-between align-items-center'>
              <div className='Header-socialicons'>
                <ul className='d-flex gap-3 mb-0'>
                  <li className='list-unstyled'><Link to='/' className='text-decoration-none text-black'><i class="bi bi-facebook"></i></Link></li>
                  <li className='list-unstyled'><Link to='/' className='text-decoration-none text-black'><i class="bi bi-twitter-x"></i></Link></li>
                  <li className='list-unstyled'><Link to='#' className='text-decoration-none text-black'><i class="bi bi-instagram"></i></Link></li>
                  <li className='list-unstyled'><Link to='#' className='text-decoration-none text-black'><i class="bi bi-linkedin"></i></Link></li>
                </ul>
              </div>
              <div className='Header-information '>
                <p className='text-black mb-0'>long established fact that a reader will be</p>
              </div>
            </div>
          </div>
        </div>
        {/* big screen navbar only */}
        <div className='navbar navbar-expand-lg pt-3 pb-3 '>
          <div className='container'>
            <div className='logo d-flex justify-content-center w-100 d-lg-none'>
              <Link to='/'>
                <img src='images/logo.jpg' alt='' ></img>
              </Link>
            </div>

            <button className="navbar-toggler d-block d-lg-none w-100 text-end bg-black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
              <i class="bi bi-list fs-1"></i>
            </button>
            <div className=' collapse navbar-collapse ' id="navbar-content">
              <div className='d-lg-flex d-block justify-content-between align-items-center w-100'>
                <div className='logo d-none d-lg-block'>
                  <Link to='/'>
                    <img src='images/logo.jpg' alt='' ></img>
                  </Link>
                </div>

                <ul id='navbar-content' className='collapse navbar-collapse d-lg-flex justify-content-center d-block gap-5 mb-0 ps-0'>
                  <li className='list-unstyled text-center '><NavLink to='/' className='fs-5 text-decoration-none text-black w-100 text-center'>Home</NavLink></li>
                  <li className='list-unstyled text-center '><NavLink to='/About' className='fs-5 text-decoration-none text-black w-100 text-center'>About</NavLink></li>
                  <li className='list-unstyled text-center '><NavLink to='/Product' className='fs-5 text-decoration-none text-black w-100 text-center'>Product</NavLink></li>
                  <li className='list-unstyled text-center '><NavLink to='/Blog' className='fs-5 text-decoration-none text-black w-100 text-center'>Blog</NavLink></li>
                  <li className='list-unstyled text-center '><NavLink to='/Contact' className='fs-5 text-decoration-none text-black w-100 text-center'>Contact</NavLink></li>
                </ul>
                <div className='navbar-buttton d-none d-lg-block'>
                  <button type='button' className='btn btn-outline ps-5 pe-5' style={{ backgroundColor: "#ffc221" }}>Login</button>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small screen device only */}
      </div>

    </>
  )
}

export default Header