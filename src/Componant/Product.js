import React from 'react'
import '../Componant/css/Product.css'
// import Client from './Client'

function Product() {
    return (
        <> 
        <div className="About-heading  pb-5 pt-5 mb-5 d-flex justify-content-center align-content-center">
        <h1><b>Product</b></h1>
      </div>
      <p className='fs-4 fw-lighter text-center'><b>We package the products with best services to make you a happy customer.</b></p>
                    
            <div id="product" className='mt-5 position-relative'>       
                <div className='product-row pt-5 pb-5' >
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="product-cards text-center mt-3 pt-3  shadow" data-aos="flip-left">
                                    <div className="product-img">
                                        <img src='icon/p1.png' alt=''></img>
                                    </div>
                                    <div className='product-details pt-2 pb-2'>
                                        <h3 className='fs-6 fw-bolder'>Norton Internet Security<br />$25.00</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="product-cards text-center mt-3 pt-3  shadow" data-aos="flip-right">
                                    <div className="product-img">
                                        <img src='icon/p2.png' alt=''></img>
                                    </div>
                                    <div className='product-details mt-2 pb-2'>
                                        <h3 className='fs-6 fw-bolder'>Norton Internet Security<br />$25.00</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="product-cards text-center mt-3 pt-3  shadow" data-aos="flip-left">
                                    <div className="product-img">
                                        <img src='icon/p3.png' alt=''></img>
                                    </div>
                                    <div className='product-details mt-2 pb-2'>
                                        <h3 className='fs-6 fw-bolder'>Norton Internet Security<br />$25.00</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="product-cards text-center mt-3 pt-3  shadow" data-aos="flip-right">
                                    <div className="product-img">
                                        <img src='icon/p4.png' alt=''></img>
                                    </div>
                                    <div className='product-details mt-2 pb-2'>
                                        <h3 className='fs-6 fw-bolder'>Norton Internet Security<br />$25.00</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="product-cards text-center mt-3 pt-3  shadow" data-aos="flip-left">
                                    <div className="product-img">
                                        <img src='icon/p5.png' alt=''></img>
                                    </div>
                                    <div className='product-details mt-2 pb-2'>
                                        <h3 className='fs-6 fw-bolder'>Norton Internet Security<br />$25.00</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="product-cards text-center mt-3 pt-3  shadow" data-aos="flip-right">
                                    <div className="product-img">
                                        <img src='icon/p6.png' alt=''></img>
                                    </div>
                                    <div className='product-details mt-2 pb-2'>
                                        <h3 className='fs-6 fw-bolder'>Norton Internet Security<br />$25.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-cards text-center mt-3 pt-3  shadow" data-aos="flip-left">
                                    <div className="product-img">
                                        <img src='icon/p7.png' alt=''></img>
                                    </div>
                                    <div className='product-details mt-2 pb-2'>
                                        <h3 className='fs-6 fw-bolder'>Norton Internet Security<br />$25.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-cards mt-3 text-center pt-3  shadow" data-aos="flip-right">
                                    <div className="product-img">
                                        <img src='icon/p2.png' alt=''></img>
                                    </div>
                                    <div className='product-details mt-2 pb-2'>
                                        <h3 className='fs-6 fw-bolder'>Norton Internet Security<br />$25.00</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product