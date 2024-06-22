import { contactUsData } from '../config/Contact';
import Form from 'react-bootstrap/Form';
import '../assets/css/contact.css'

function Contactus() {
    return (
        <div>
            <div className="container-fluid container-lg py-2 position-relative">
                <div className="row gy-3 justify-content-center align-items-md-center align-items-lg-center justify-content-lg-between">
                    <div className="col-md-5 col-12 ">
                        <div className="flex flex-column ">
                            <div className="formtext">
                                <h2>Contact Us</h2>
                                <p>We would love to get in touch with you! Send us a message below and we&apos;ll contact you in the next 24 hours. Thanks!</p>

                            </div>
                            <div className='form'>
                                <Form>
                                    <div className='row  gy-3 justify-content-center align-items-start'>
                                        <div className='col-12'>
                                            <Form.Group controlId="formBasicPassword" className="form-group">
                                                <Form.Control type="text" className='py-3' placeholder=" " required />
                                                <Form.Label>Name <span className='star'>*</span></Form.Label>
                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <Form.Group controlId="formBasicEmail" className="form-group">
                                                <Form.Control type="email" className='py-3' placeholder=" " required />
                                                <Form.Label>Email <span className='star'>*</span></Form.Label>
                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <Form.Group className="form-group " controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea" rows={3} className='py-3' placeholder=''
                                                    required />
                                                <Form.Label>Massage <span className='star'>*</span></Form.Label>

                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <div className=''>
                                                <button type='submit' className="primarybtn w-100 py-2 px-3 fw-bold ">
                                                    Send!
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>




                        </div>



                    </div>
                    <div className="col-md-6 d-md-block d-none">
                        <img src="images/bgabout.png" className="img-fluid rounded"></img>

                    </div>



                </div>

                <div className='mt-4 py-3 py-md-3 py-lg-5 justify-content-center' >
                    <h2 className=' text-center'>Stay in touch</h2>
                    <div className='row py-lg-3 py-3  gy-3 justify-content-center align-items-center'>
                        {contactUsData.map((data, i) => (
                            <div className='col-lg-4 col-xl-3  ' key={i}>
                                <div className='d-flex align-items-start aling-items-md-center gap-4 '>
                                    <div>
                                        <data.icon size={25} color='var(--primary-color)' />
                                    </div>

                                    <div className='text-start'>
                                        <p className='m-0'>{data.title}</p>
                                        <p className='m-0'>{data.para}</p>
                                        <a href='#'>{data.navigate}</a>
                                    </div>

                                </div>



                            </div>


                        ))}




                    </div>

                </div>

                
                </div>
                <div className="map">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      src="https://maps.google.com/maps?q=thokar%20no%204%20abul%20fazal%20enclave&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                      frameBorder="0"
                      scrolling="no"
                      style={{ width: "100%", height: "410px" }}
                    ></iframe>
                    <style>
                      {`
                        .mapouter {
                          position: relative;
                          background: #fff;
                        }
                        .maprouter a {
                          color: #fff !important;
                          position: absolute !important;
                          top: 0 !important;
                          z-index: 0 !important;
                        }
                      `}
                    </style>
                    <style>
                      {`
                        .gmap_canvas {
                          overflow: hidden;
                         
                        }
                        .gmap_canvas iframe {
                          position: relative;
                          z-index: 2;
                        }
                      `}
                    </style>
                  </div>
                </div>
              </div>

        </div>
    )
}

export default Contactus
