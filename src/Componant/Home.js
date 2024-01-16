import React from 'react'
import Services from './Services'
import Product from './Product' 
import Client from './Client'
import Map from './Map'

function Home() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" >
                    <div className="carousel-item active position-relative">
                        <div className='carosal-content position-absolute top-0 w-100 mt-3'  >
                            <div className='container'>
                                <div className="d-lg-block d-none" data-aos="fade-right" >
                            
                                <h5 className='text-uppercase text-black'><span className='fw-normal'>Our</span><br /><b>Latest</b><br /><span style={{ color: '#ffc221' }}>Product</span></h5>
                                <p className='fw-bold mb-0 d-lg-block d-none'>It is a long established fact that a r<br />
                                    eader will be distracted by the readable content of a page</p><br/>
                                    <button className='btn btn-content ps-lg-5 pt-lg-3 pb-lg-3 pe-lg-5'>See More Product</button>
                            </div>
                        </div>
                        </div>
                        
                        <img src="images/banner2.jpg" className="d-block w-100" alt="images/banner2.jpg" />
                    
                    </div>
                    <div className="carousel-item">
                    <div className='carosal-content position-absolute top-0 w-100 mt-3'>
                            <div className='container'>
                            <div className="d-lg-block d-none" data-aos="fade-right" >
                                <h5 className='text-uppercase text-black'><span className='fw-normal'>Our</span><br /><b>Latest</b><br /><span style={{ color: '#ffc221' }}>Product</span></h5>
                                <p className='fw-bold mb-0 d-lg-block d-none'>It is a long established fact that a r<br />
                                    eader will be distracted by the readable content of a page</p><br/>
                                    <button className='btn btn-content ps-lg-5 pt-lg-3 pb-lg-3 pe-lg-5'>See More Product</button>
                            </div>
                        </div>
                        </div>
                        <img src="images/banner2.jpg" className="d-block w-100" alt="images/banner2.jpg" />
                    </div>
                    <div className="carousel-item">
                    <div className='carosal-content position-absolute top-0 w-100 mt-3'>
                            <div className='container'>
                            <div className="d-lg-block d-none" data-aos="fade-right" >
                                <h5 className='text-uppercase text-black'><span className='fw-normal'>Our</span><br /><b>Latest</b><br /><span style={{ color: '#ffc221' }}>Product</span></h5>
                                <p className='fw-bold mb-0 d-lg-block d-none'>It is a long established fact that a r<br />
                                    eader will be distracted by the readable content of a page</p><br/>
                                    <button className='btn btn-content ps-lg-5 pt-lg-3 pb-lg-3 pe-lg-5'>See More Product</button>
                            </div>
                            </div>
                        </div>
                        <img src="images/banner2.jpg" className="d-block w-100" alt="images/banner2.jpg" />
                    </div>
                </div>
                <div className='d-flex gap-4 ms-2 w-0 bg-white w-25' style={{marginTop:'-70px'}}>
                <button className=" btn carousel-control-prev fade p-0 w-0 bg-white h-0 position-static"  style={{color:"red !important",opacity:'1.5 !important'}}  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <i class="bi bi-chevron-left text-black fs-1"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next position-static p-0 w-0 bg-white h-0" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <i class="bi bi-chevron-right text-black fs-1"></i>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <Services/>
            <div id='Product'>
            <div className="container">

                    <div className='Headline w-100 mt-5'>
                        <h1 style={{ fontSize: "" }} className='text-uppercase'><span style={{ color: '#ffc221' }}>OUR </span>  PRODUCTS</h1>

                        <div className='row '>
                            <div className='col-1 '>
                                <hr className=' mt-0 h-25'></hr>
                            </div>
                        </div>
                        <p className='fs-4 fw-lighter'><b>We package the products with best services to make you a happy customer.</b></p>
                    </div>
                </div>
                </div>
            <Product/>
            <Client/>
            <Map/>

        </>
    )
}

export default Home