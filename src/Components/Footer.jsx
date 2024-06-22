import Form from 'react-bootstrap/Form';
import { FaLinkedinIn, } from "react-icons/fa6"
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoGmail } from 'react-icons/bi'
import '../assets/css/footer.css'
function Footer() {
  return (
    <div className=''>
      <footer className="footer footerbg container-fluid ">
        <div className="container py-2 py-md-3 py-lg-5 overflow-hidden">
          <div className="row py-lg-3 py-1  justify-content-between align-items-start py-4">
            <div className=" About details col-12 col-lg-2 d-flex flex-column gap-2 my-lg-0 my-3">
              <h4 className=''>E-Commerce</h4>
              <p className=''>A short text explaining
                why my startup is so cool
              </p>
              <div>
                <p>Follow us</p>
                <div className=" text-decoration-none">
                  <ul className="social-icons list-unstyled d-flex justify-content-start align-items-center gap-4 my-3 text-white">

                    <li> <a href="#" className=''>
                      <BiLogoFacebook className='icon' size={"25px"} />
                    </a>
                    </li>

                    <li> <a href="#">
                      <FaLinkedinIn className='icon' size={"25px"} />
                    </a>
                    </li>
                    <li>
                      <a href="https://wa.me/8868873958" target="_blank" rel="noopener noreferrer">
                        <AiOutlineWhatsApp className='icon' size={"25px"} />
                      </a>
                    </li>




                    <li>
                      <a href="#">
                        <BiLogoGmail className='icon' size={"25px"} />
                      </a>
                    </li>
                   
                  </ul>


                </div>

              </div>




            </div>
            <div className="col-lg-2 col-6 col-sm-6 mt-3 mt-md-0 d-flex flex-column justify-content-center align-items-start align-items-lg-center">
              <div className="navlinks">
                <h5 className='nav-title'>About Us</h5>
                <ul className=" list-unstyled footernav" >
                  <li><a href=''>Our Mission</a></li>
                  <li><a href=''>Our Team</a></li>
                  <li><a href=''>Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 mt-3 mt-md-0 col-sm-6 d-flex flex-column justify-content-center align-items-start align-items-lg-center">
              <div className="navlinks">
                <h5 className='nav-title'>Services</h5>
                <ul className=" list-unstyled footernav">
                  <li><a href=''>Stories</a></li>
                  <li><a href=''>Events</a></li>
                  <li><a href=''>Partners</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-12 mt-3 mt-md-0 col-sm-6 d-flex flex-column justify-content-center align-items-start align-items-lg-center">
              <div className="navlinks">
                <h5 className='nav-title'>E-Commerce</h5>
                <ul className=" list-unstyled footernav">
                  <li><a href=''>Blog</a></li>
                  <li><a href=''>Careers</a></li>


                </ul>
              </div>

            </div>
            <div className="col-lg-3 col-12 mt-3 mt-md-0 col-sm-6 d-flex flex-column justify-content-center align-items-start align-items-lg-center gap-2">
              <div className="navlinks lastChild">
                <h5 className='nav-title'>Stay up to date!</h5>
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
                        <div className=''>
                          <button type='submit' className="primarybtn w-100 py-2 px-3 fw-bold ">
                            Subscribe!
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className='text-center'>
          <p className='mb-0'>©2020 Limitless. Limitless is a 501(c)(3) tax-exempt charity. All Rights Reserved. EIN: 90-1302804</p>

        </div>
      </footer>
    </div>
  )
}

export default Footer
