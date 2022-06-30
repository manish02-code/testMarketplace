//////////////////////////////////////////////////////////////////////////////////////////////
/////IMPORTING ALL CSS
import "../../Pages/assets/css/uicons-solid-rounded.css"
import "../../Pages/assets/css/bootstrap.min.css"
 import "../../Pages/assets/css/default.css"
 import "../../Pages/assets/css/flaticon.css"
 import "../../Pages/assets/css/fontawesome-all.min.css"
import "../../Pages/assets/css/jquery.mCustomScrollbar.min.css" 
 import "../../Pages/assets/css/magnific-popup.css"
import "../../Pages/assets/css/responsive.css"
 import "../../Pages/assets/css/slick.css"
import "../../Pages/assets/css/style.css"
import "../../Pages/assets/css/animate.min.css"

import { Link } from "react-router-dom"

/////////////////////////////////////////////////////////////////////////////////////////////

const Footer = () => {
    return (
<>
        <div className="footer-top-wrap">
            <div className="container">
                <div className=" row justify-content-between">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-9">
                        <div className="footer-logo mb-25">
                            <Link to="/Homepage"><img src="assets/img/logo/logo.png" alt="" /></Link>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus veritatis sequi doloribus fuga.</p>
                            <ul class="footer-social">
                                <li><Link to="#"><i class="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i class="fab fa-twitter"></i></Link></li>
                                <li><Link to="#"><i class="fab fa-linkedin-in"></i></Link></li>
                                <li><Link to="#"><i class="fab fa-pinterest-p"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer-widget">
                            <h4 className="fw-title">Useful Link</h4>
                            <ul class="fw-links">
                                    <li><Link to="/NFTMarketPlace">All NFTs</Link></li>
                                    <li><Link to="/LoginRegister">How It Works</Link></li>
                                    <li><Link to="/CreateItem">Create</Link></li>
                                    <li><Link to="/NFTMarketPlace">Explore</Link></li>
                                    <li><Link to="/PrivacyAndTerms">Privacy & Terms</Link></li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="footer-widget">
                            <h4 className="fw-title">Subscribe Us</h4>
                            <form action="#" className="newsletter-form">
                                    <input type="email" placeholder="info@youmail.com"></input>
                                    <button type="submit"><i class="flaticon-small-rocket-ship-silhouette"></i></button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-wrap">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="copyright-text">
                                <p>All rights reserved © 2022 by <Link to="#">ThemeBeyond</Link></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ul class="copyright-link-list">
                                <li><Link to="login-register.html">Privacy Policy</Link></li>
                                <li><Link to="login-register.html">Terms And Condition</Link></li>
                                <li><Link to="login-register.html">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </>
      
        
    )
}

export default Footer;
