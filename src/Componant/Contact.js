import React from 'react'
import '../Componant/css/Contact.css'

function Contact() {
    return (
        <>
            <div className="About-heading  pb-5 pt-5 mb-5  d-flex justify-content-center align-content-center">
                <h1><b>Contact</b></h1>
            </div> 
            <div id="form" className='mb-3'> 
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6' data-aos="fade-right">
                            <input type='text' className='w-100 p-2' placeholder='Enter Your Name'></input>

                        </div>
                        <div className='col-lg-6' data-aos="fade-left">
                        <input type='Email' className='w-100 p-2' placeholder='Enter Your Email Id'></input>
                            
                        </div>
                        <div className='col-lg-12' data-aos="fade-up">
                        <input type='Mobile' className='w-100 p-2' placeholder='Enter Your Mobile No'></input>
                            
                        </div>
                        <div className='col-lg-12' data-aos="fade-up">
                       <textarea className='w-100 p-2' placeholder='Enter Your Message'></textarea>
                        </div>
                        </div>
                        <div className='col-lg-12 text-center' data-aos="fade-up">
                        <button type='button' className='btn btn-outline ps-5 pe-5 text-white' style={{backgroundColor: "black"}}>Send</button>
                    </div>
                            
                </div>
            </div>
        </>
    )
}

export default Contact