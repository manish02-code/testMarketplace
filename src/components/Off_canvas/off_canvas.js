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


/////////////////////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom"


const Offcanvas = () => {
    return (
        <div className="FirstContainer">
            <div className="offcanvas-wrapper">
                <div className="menu-trigger"><i className="fi-sr-angle-small-left"></i></div>
                <div className="menu-close"><i className="fi-sr-angle-small-right"></i></div>
                <div className="offcanvas-inner scroll">
                    <div className="author-profile text-center mb-30">
                        <div className="author-img">
                            <img src="assets/img/others/Linkuthor_img.png" alt=""/>
                        </div>
                        <div className="author-content">
                            <h4 className="title">Author Profile</h4>
                            <p>Super Author</p>
                            <Link to="/LoginRegister" className="btn">Checkout</Link>
                        </div>
                    </div>
                    <div className="sidebar-slider text-center mb-25">
                        <div className="sidebar-active">
                            <div className="sidebar-img">
                                <Link to="/MarketSingle"><img src="assets/img/others/sidebar_img01.png" alt=""/></Link>
                            </div>
                            <div className="sidebar-img">
                                <Link to="/MarketSingle"><img src="assets/img/others/sidebar_img02.png" alt=""/></Link>
                            </div>
                            <div className="sidebar-img">
                                <Link to="/MarketSingle"><img src="assets/img/others/sidebar_img03.png" alt=""/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="overview">
                        <div className="overview-title">
                            <h4 className="title">Overview</h4>
                        </div>
                        <div className="overview-item-wrap">
                            <div className="overview-item">
                                <div className="overview-icon">
                                    <i className="fi-sr-box-alt"></i>
                                </div>
                                <div className="overview-content">
                                    <h4 className="title">Open project</h4>
                                    <span>820</span>
                                </div>
                                <Link to="/NFTMarketPlace"><i className=" fi-sr-angle-small-right"></i></Link>
                            </div>
                            <div className="overview-item">
                                <div className="overview-icon">
                                    <i className="fi-sr-mountains"></i>
                                </div>
                                <div className="overview-content">
                                    <h4 className="title">Successful Completed</h4>
                                    <span>546</span>
                                </div>
                                <Link to="/NFTMarketPlace"><i className=" fi-sr-angle-small-right"></i></Link>
                            </div>
                            <div className="overview-item">
                                <div className="overview-icon">
                                    <i className=" fi-sr-hourglass-end"></i>
                                </div>
                                <div className="overview-content">
                                    <h4 className="title">trending</h4>
                                    <span>32</span>
                                </div>
                                <Link to="/NFTMarketPlace"><i className=" fi-sr-angle-small-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-overly"></div>

        </div>
    )
};

export default Offcanvas;