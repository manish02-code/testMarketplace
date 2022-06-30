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




const Header = ()=>{
    
    return(
       
        <div class="menu-area" >
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                    <div class="menu-wrap">
                        <nav class="menu-nav">
                            <div class="logo">
                                <Link to="/Homepage"><img src="assets/img/logo/naftmak.svg" alt="" /></Link>
                            </div>
                            <div class="header-form">
                                <form action="#">
                                    <button><i class="flaticon-search"></i></button>
                                    <input type="text" placeholder="Search Artwork" />
                                </form>
                            </div>
                            <div class="navbar-wrap main-menu d-none d-lg-flex">
                                <ul class="navigation">
                                    <li class="active"><Link to="/Homepage">Home</Link></li>
                                    <li><Link to= "/NFTMarketPlace" >Explore</Link></li>
                                    <li><Link to="/collection">Collection</Link></li>
                                    <li class="menu-item-has-children"><a href="#">Pages</a>
                                        <ul class="submenu">
                                            <li><Link to="/activity">Activity</Link></li>
                                            <li><Link to="/Category">Category</Link></li>
                                            <li><Link to="/Ranking">Ranking</Link></li>
                                            <li><Link to="/Creators">Creators</Link></li>
                                            <li><Link to="/MarketSingle">Market Single</Link></li>
                                            <li><Link to="/LiveNFTBiddind">Live Bidding</Link></li>
                                            <li><Link to="/CreateIteml">Create Item</Link></li>
                                            <li><Link to="/AuthorProfile">Author Profile</Link></li>
                                            <li><Link to="/LoginRegister">Login & Register</Link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#">Blog</a>
                                        <ul class="submenu">
                                            <li><Link to="Blog">Our Blog</Link></li>
                                            <li><Link to="BlogDitails">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="header-action d-none d-md-block">
                                <ul>
                                    <li class="header-btn"><Link to="/ConnectWallet" class="btn">Wallet Connect</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
               
                    <div class="mobile-menu">
                        <nav class="menu-box">
                            <div class="close-btn"><i class="fas fa-times"></i></div>
                            <div class="nav-logo">
                                <a href="index.html"><img src="../../../public/assets/img/logo/logo.png" alt=""/></a>
                            </div>
                            <div class="menu-outer">


                            </div>
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                                    <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="menu-backdrop"></div>
                 
                </div>
            </div>
        </div>
    </div>




    )
}


export default Header