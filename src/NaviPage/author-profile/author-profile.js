////////////////////////////////////////////////////////////////////////////////////////////
///IMPORTING ALL CSS

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
///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//////////// IMPORTING  FILES
import Sidebar from "../../components/Side_Menu_Bar/side_menu_bar";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Offcanvas from "../../components/Off_canvas/off_canvas";
///////////////////////////////////////////////////////////////////////////////////////
//////// IMPORTING MODULES
import { Link } from "react-router-dom";



const AuthorProfile = ()=>{

    return(

        <div>
            <div id='Main_Container'>
                <Sidebar/>
                <Header/>


                <div className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="breadcrumb-content text-center">
                                    <h3 className="title">Authors Profile</h3>
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
                                    <li><Link to="/NFTMarketPlacel"><img src="assets/img/icons/cat_01.png" alt=""/> Games</Link></li>
                                    <li><Link to="/NFTMarketPlacel"><img src="assets/img/icons/cat_02.png" alt=""/> Art</Link></li>
                                    <li><Link to="/NFTMarketPlacel"><img src="assets/img/icons/cat_03.png" alt=""/> Trading Cards</Link></li>
                                    <li><Link to="/NFTMarketPlacel"><img src="assets/img/icons/cat_04.png" alt=""/> Music</Link></li>
                                    <li><Link to="/NFTMarketPlacel"><img src="assets/img/icons/cat_05.png" alt=""/> Domain Names</Link></li>
                                    <li><Link to="/NFTMarketPlacel"><img src="assets/img/icons/cat_06.png" alt=""/> Memes</Link></li>
                                    <li><Link to="/NFTMarketPlacel"><img src="assets/img/icons/cat_07.png" alt=""/> Collectibles</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="author-profile-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 order-2 order-lg-0">
                                <aside className="author-profile-wrap">
                                    <div className="author-profile-thumb">
                                        <img src="assets/img/others/author_profile.png" alt=""/>
                                    </div>
                                    <div className="author-info">
                                        <h5 className="title">Olivia Jenar <img src="assets/img/icons/star.svg" alt=""/></h5>
                                        <span>@ marketplace</span>
                                        <p>Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.</p>
                                    </div>
                                    <ul className="author-collection">
                                        <li>
                                            <p>Collection</p>
                                            <span>201</span>
                                        </li>
                                        <li>
                                            <p>Creation</p>
                                            <span>235</span>
                                        </li>
                                    </ul>
                                    <div className="author-social">
                                        <h6 className="title">Follow Social Media :</h6>
                                        <ul>
                                            <li><Link to="#"><div className="icon"><i className="fab fa-facebook-f"></i></div> Facebook / @joys_Aoi</Link></li>
                                            <li><Link to="#"><div className="icon"><i className="fab fa-facebook-messenger"></i></div> Messenger / @joys_Avi</Link></li>
                                            <li><Link to="#"><div className="icon"><i className="fab fa-whatsapp"></i></div> Whatsapp / @joys_Avi</Link></li>
                                            <li><Link to="#"><div className="icon"><i className="fab fa-youtube"></i></div> Youtube / @joys_Avi</Link></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="author-product-meta">
                                    <ul>
                                        <li className="active"><Link to="/AuthorProfile">All nft</Link></li>
                                        <li><Link to="/AuthorProfile">Virtual Worlds</Link></li>
                                        <li><Link to="/AuthorProfile">Collectibles</Link></li>
                                        <li><Link to="/AuthorProfile">Music</Link></li>
                                    </ul>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div className="top-collection-item">
                                            <div className="collection-item-top">
                                                <ul>
                                                    <li className="avatar"><Link to="/AuthorProfile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt=""/></Link>By <Link to="/AuthorProfile" className="name">Jonson</Link></li>
                                                    <li className="info-dots dropdown">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                        <ul className="dropdown-menu">
                                                            <li><Link to="/NFTMarketPlacel">Artwork</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Action</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Author Action</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collection-item-thumb">
                                                <Link to="/MarketSingle"><img src="assets/img/others/top_collection01.jpg" alt=""/></Link>
                                            </div>
                                            <div className="collection-item-content">
                                                <h5 className="title"><Link to="/MarketSingle">Action Collection</Link> <span className="price">5.4 ETH</span></h5>
                                            </div>
                                            <div className="collection-item-bottom">
                                                <ul>
                                                    <li className="bid"><Link to="/MarketSingle" className="btn">place a bid</Link></li>
                                                    <li className="wishlist"><Link to="login-register.html">59</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div className="top-collection-item">
                                            <div className="collection-item-top">
                                                <ul>
                                                    <li className="avatar"><Link to="/AuthorProfile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt=""/></Link>By <Link to="/AuthorProfile" className="name">Jonson</Link></li>
                                                    <li className="info-dots dropdown">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                        <ul className="dropdown-menu">
                                                            <li><Link to="/NFTMarketPlacel">Artwork</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Action</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Author Action</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collection-item-thumb">
                                                <Link to="/MarketSingle"><img src="assets/img/others/top_collection05.jpg" alt=""/></Link>
                                            </div>
                                            <div className="collection-item-content">
                                                <h5 className="title"><Link to="/MarketSingle">Pie Collection</Link> <span className="price">5.4 ETH</span></h5>
                                            </div>
                                            <div className="collection-item-bottom">
                                                <ul>
                                                    <li className="bid"><Link to="/MarketSingle" className="btn">place a bid</Link></li>
                                                    <li className="wishlist"><Link to="#">59</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div className="top-collection-item">
                                            <div className="collection-item-top">
                                                <ul>
                                                    <li className="avatar"><Link to="/AuthorProfile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt=""/></Link>By <Link to="/AuthorProfile" className="name">Jonson</Link></li>
                                                    <li className="info-dots dropdown">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                        <ul className="dropdown-menu">
                                                            <li><Link to="/NFTMarketPlacel">Artwork</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Action</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Author Action</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collection-item-thumb">
                                                <Link to="/MarketSingle"><img src="assets/img/others/top_collection06.jpg" alt=""/></Link>
                                            </div>
                                            <div className="collection-item-content">
                                                <h5 className="title"><Link to="/MarketSingle">Artwork Collection</Link> <span className="price">5.4 ETH</span></h5>
                                            </div>
                                            <div className="collection-item-bottom">
                                                <ul>
                                                    <li className="bid"><Link to="/MarketSingle" className="btn">place a bid</Link></li>
                                                    <li className="wishlist"><Link to="#">59</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div className="top-collection-item">
                                            <div className="collection-item-top">
                                                <ul>
                                                    <li className="avatar"><Link to="/AuthorProfile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt=""/></Link>By <Link to="/AuthorProfile" className="name">Jonson</Link></li>
                                                    <li className="info-dots dropdown">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                        <ul className="dropdown-menu">
                                                            <li><Link to="/NFTMarketPlacel">Artwork</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Action</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Author Action</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collection-item-thumb">
                                                <Link to="/MarketSingle"><img src="assets/img/others/top_collection07.jpg" alt=""/></Link>
                                            </div>
                                            <div className="collection-item-content">
                                                <h5 className="title"><Link to="/MarketSingle">Action Collection</Link> <span className="price">5.4 ETH</span></h5>
                                            </div>
                                            <div className="collection-item-bottom">
                                                <ul>
                                                    <li className="bid"><Link to="/MarketSingle" className="btn">place a bid</Link></li>
                                                    <li className="wishlist"><Link to="#">59</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div className="top-collection-item">
                                            <div className="collection-item-top">
                                                <ul>
                                                    <li className="avatar"><Link to="/AuthorProfile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt=""/></Link>By <Link to="/AuthorProfile" className="name">Jonson</Link></li>
                                                    <li className="info-dots dropdown">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                            aria-expanded="false"></Link>
                                                        <ul className="dropdown-menu">
                                                            <li><Link to="/NFTMarketPlacel">Artwork</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Action</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Author Action</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collection-item-thumb">
                                                <Link to="/MarketSingle"><img src="assets/img/others/top_collection08.jpg" alt=""/></Link>
                                            </div>
                                            <div className="collection-item-content">
                                                <h5 className="title"><Link to="/MarketSingle">Artwork Collection</Link> <span className="price">5.4 ETH</span></h5>
                                            </div>
                                            <div className="collection-item-bottom">
                                                <ul>
                                                    <li className="bid"><Link to="/MarketSingle" className="btn">place a bid</Link></li>
                                                    <li className="wishlist"><Link to="#">59</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div className="top-collection-item">
                                            <div className="collection-item-top">
                                                <ul>
                                                    <li className="avatar"><Link to="/AuthorProfile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt=""/></Link>By <Link to="/AuthorProfile" className="name">Jonson</Link></li>
                                                    <li className="info-dots dropdown">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                            aria-expanded="false"></Link>
                                                        <ul className="dropdown-menu">
                                                            <li><Link to="/NFTMarketPlacel">Artwork</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Action</Link></li>
                                                            <li><Link to="/NFTMarketPlacel">Author Action</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collection-item-thumb">
                                                <Link to="/MarketSingle"><img src="assets/img/others/top_collection09.jpg" alt=""/></Link>
                                            </div>
                                            <div className="collection-item-content">
                                                <h5 className="title"><Link to="/MarketSingle">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                            </div>
                                            <div className="collection-item-bottom">
                                                <ul>
                                                    <li className="bid"><Link to="/MarketSingle" className="btn">place a bid</Link></li>
                                                    <li className="wishlist"><Link to="#">59</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
     




                <Footer/>
            </div>
        </div>
    )
}


export default AuthorProfile;