////////////////////////////////////////////////////////////////////////////////////////////
//////////// IMPORTING  FILES
import Sidebar from "../../components/Side_Menu_Bar/side_menu_bar";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Offcanvas from "../../components/Off_canvas/off_canvas";
import FeaturesOFtheWeek from "../../components/Features of the week/Features_of_the_week";
///////////////////////////////////////////////////////////////////////////////////////
//////// IMPORTING MODULES
import { Link } from "react-router-dom";

//////////////////////////////////////////////////////////////////////////////////////////////
/////IMPORTING ALL CSS

import "../../Pages/assets/css/style.css";
import "../../Pages/assets/css/bootstrap.min.css"
import "../../Pages/assets/css/default.css"
import "../../Pages/assets/css/flaticon.css"
import "../../Pages/assets/css/fontawesome-all.min.css"
import "../../Pages/assets/css/jquery.mCustomScrollbar.min.css"
import "../../Pages/assets/css/magnific-popup.css"
import "../../Pages/assets/css/responsive.css"
import "../../Pages/assets/css/slick.css"
import "../../Pages/assets/css/uicons-solid-rounded.css"
import "../../Pages/assets/css/animate.min.css"
/////////////////////////////////////////////////////////////////////////////////////////////


const Creators = ()=>{

    return(

        <div>
            <div id='Main_Container'>
                <Sidebar/>
                <Header/>





                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="breadcrumb-content text-center">
                                    <h3 className="title">NFT Marketplace</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                            


                <div className="category-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ul className="category-list">
                                    <li className="active"><Link to="/Homepage"><img src="assets/img/icons/cat_001.png" alt=""/> All</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_01.png" alt=""/> Games</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_02.png" alt=""/> Art</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_03.png" alt=""/> Trading Cards</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_04.png" alt=""/> Music</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_05.png" alt=""/> Domain Names</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_06.png" alt=""/> Memes</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_07.png" alt=""/> Collectibles</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="creator-area pt-80 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title mb-35">
                                    <h2 className="title">Popular Creators <img src="assets/img/icons/title_icon01.png" alt=""/></h2>
                                </div>
                                <div className="creator-active">
                                    <div className="creator-item">
                                        <img src="assets/img/icons/start.png" alt="" className="star"/>
                                        <div className="creator-thumb">
                                            <img src="assets/img/others/creators_01.png" alt=""/>
                                        </div>
                                        <div className="creator-content">
                                            <h5 className="title"><Link to="/AuthorProfile">Franklin Jonas</Link></h5>
                                            <span>1k Sale 5.47 ETH</span>
                                            <Link to="/AuthorProfile" className="btn">follow</Link>
                                        </div>
                                    </div>
                                    <div className="creator-item">
                                        <img src="assets/img/icons/start.png" alt="" className="star"/>
                                        <div className="creator-thumb">
                                            <img src="assets/img/others/creators_02.png" alt=""/>
                                        </div>
                                        <div className="creator-content">
                                            <h5 className="title"><Link to="/AuthorProfile">Franklin Jonas</Link></h5>
                                            <span>1k Sale 5.47 ETH</span>
                                            <Link to="/AuthorProfile" className="btn">follow</Link>
                                        </div>
                                    </div>
                                    <div className="creator-item">
                                        <img src="assets/img/icons/start.png" alt="" className="star"/>
                                        <div className="creator-thumb">
                                            <img src="assets/img/others/creators_03.png" alt=""/>
                                        </div>
                                        <div className="creator-content">
                                            <h5 className="title"><Link to="/AuthorProfile">Franklin Jonas</Link></h5>
                                            <span>1k Sale 5.47 ETH</span>
                                            <Link to="/AuthorProfile" className="btn">follow</Link>
                                        </div>
                                    </div>
                                    <div className="creator-item">
                                        <img src="assets/img/icons/start.png" alt="" className="star"/>
                                        <div className="creator-thumb">
                                            <img src="assets/img/others/creators_04.png" alt=""/>
                                        </div>
                                        <div className="creator-content">
                                            <h5 className="title"><Link to="/AuthorProfile">Franklin Jonas</Link></h5>
                                            <span>1k Sale 5.47 ETH</span>
                                            <Link to="/AuthorProfile" className="btn">follow</Link>
                                        </div>
                                    </div>
                                    <div className="creator-item">
                                        <img src="assets/img/icons/start.png" alt="" className="star"/>
                                        <div className="creator-thumb">
                                            <img src="assets/img/others/creators_05.png" alt=""/>
                                        </div>
                                        <div className="creator-content">
                                            <h5 className="title"><Link to="/AuthorProfile">Franklin Jonas</Link></h5>
                                            <span>1k Sale 5.47 ETH</span>
                                            <Link to="/AuthorProfile" className="btn">follow</Link>
                                        </div>
                                    </div>
                                    <div className="creator-item">
                                        <img src="assets/img/icons/start.png" alt="" className="star"/>
                                        <div className="creator-thumb">
                                            <img src="assets/img/others/creators_06.png" alt=""/>
                                        </div>
                                        <div className="creator-content">
                                            <h5 className="title"><Link to="/AuthorProfile">Franklin Jonas</Link></h5>
                                            <span>1k Sale 5.47 ETH</span>
                                            <Link to="/AuthorProfile" className="btn">follow</Link>
                                        </div>
                                    </div>
                                    <div className="creator-item">
                                        <img src="assets/img/icons/start.png" alt="" className="star"/>
                                        <div className="creator-thumb">
                                            <img src="assets/img/others/creators_03.png" alt=""/>
                                        </div>
                                        <div className="creator-content">
                                            <h5 className="title"><Link to="/AuthorProfile">Franklin Jonas</Link></h5>
                                            <span>1k Sale 5.47 ETH</span>
                                            <Link to="/AuthorProfile" className="btn">follow</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>









                <FeaturesOFtheWeek/>
                <Footer/>
            </div>
        </div>
    )
}


export default Creators;