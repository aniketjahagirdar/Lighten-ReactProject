import React from 'react'
import '../Componant/css/About.css'
import Services from './Services'

function About() {
  return ( 
    <>
      <div className="About-heading  pb-5 pt-5 mb-5  d-flex justify-content-center align-content-center">
        <h1><b>About</b></h1>
      </div>
      <div id='about-information' className='mt-5 pt-5 '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='about-img'>
                <img src='images/pc_layout.png' className='img-fluid w-100' alt=""></img>

              </div>
            </div>
            <div className='col-lg-6'>
              <div className='about-paragraph text-black'>
                <h3 className='fw-bolder'>Who is Lighten</h3>
                <p className='fw-normal mt-3'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>

                <p className='fw-normal'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

              </div>

            </div>
          </div>
        </div>
      </div>
      <Services />
    </>
  )
}

export default About