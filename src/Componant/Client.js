import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Componant/css/Client.css'
function Client() { 

  const client = {
    loop: true,
    dots: true, 
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  }
  return (
    <>
      {/* <OwlCarousel className=' owl-theme owl-carousal' {...client}>
        <div><img src='images/bg.jpg' /></div>
        {/* <div><img src='images/bg.jpg'/></div>
      <div><img src='images/bg.jpg'/></div> */}
      {/* </OwlCarousel>  */}


      <div id='Client' className='pt-5 pb-3' data-aos="zoom-in-down">
        <div className='container'>
          <h1 className='fw-lighter'>What Client Say?</h1>
          <OwlCarousel className=' owl-theme owl-carousal' {...client}  >
            <div className='first-client'>
              <div className='clint-info d-flex align-items-center gap-5 mt-5'>
                <div className='clint-img'>
                  <img src='images/lllll.png' alt='' className='img-fluid w-75 h-25'></img>
                </div>
                <div className='name-info'>
                  <h3>Jone Due<br />
                    12/02/2019</h3>
                </div>
              </div>
              <p className='fs-6 pt-3 pl-3 text-black'>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first.</p>
            </div>
            {/* second client */}
            <div className='second-client'>
              <div className='clint-info d-flex align-items-center gap-5 mt-5'>
                <div className='clint-img'>
                  <img src='images/lllll.png' alt='' className='img-fluid w-75 h-25'></img>
                </div>
                <div className='name-info'>
                  <h3>Jone Due<br />
                    12/02/2019</h3>
                </div>
              </div>
              <p className='fs-6 pt-3 pl-3 text-black'>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first.</p>
            </div>
            {/* Third client */}
            <div className='third-client'>
              <div className='clint-info d-flex align-items-center gap-5 mt-5'>
                <div className='clint-img'>
                  <img src='images/lllll.png' alt='' className='img-fluid w-75 h-25'></img>
                </div>
                <div className='name-info'>
                  <h3>Jone Due<br />
                    12/02/2019</h3>
                </div>
              </div>
              <p className='fs-6 pt-3 pl-3 text-black'>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first.</p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  )
}

export default Client