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


const NFTMarketPlace = ()=>{

    return(

        <div>
            <div className="main-content">
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







                <div className="inner-explore-products">
                    <div className="container">
                        <div className="explore-product-filter">
                            <div className="section-title mb-45">
                                <h2 className="title">Artworks <img src="assets/img/icons/title_icon01.png" alt=""/></h2>
                            </div>
                            <div className="filter-wrap">
                                <form action="#">
                                    <div className="filter-item">
                                        <label className="title">FILTER BY:</label>
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="button"></span>
                                        </label>
                                    </div>
                                    <div className="filter-item">
                                        <label className="title">Has list price:</label>
                                        <label className="switch">
                                            <input type="checkbox" checked/>
                                            <span className="button"></span>
                                        </label>
                                    </div>
                                    <div className="filter-item">
                                        <label className="title">Has open offer</label>
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="button"></span>
                                        </label>
                                    </div>
                                    <div className="filter-item">
                                        <label className="title">Owned by creator</label>
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="button"></span>
                                        </label>
                                    </div>
                                    <div className="filter-item">
                                        <label className="title">Has sold</label>
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="button"></span>
                                        </label>
                                    </div>
                                    <button className="btn filter-btn"><i className="fi-sr-filter"></i> filter</button>
                                </form>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection01.jpg" alt=""/></Link>
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
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
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
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
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
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
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
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection08.jpg" alt=""/></Link>
                                    </div>
                                    <div className="collection-item-content">
                                        <h5 className="title"><Link to="/MarketSingle">Craft Collection</Link> <span className="price">5.4 ETH</span></h5>
                                    </div>
                                    <div className="collection-item-bottom">
                                        <ul>
                                            <li className="bid"><Link to="/MarketSingle" className="btn">place a bid</Link></li>
                                            <li className="wishlist"><Link to="#">59</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
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
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection10.jpg" alt=""/></Link>
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
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection11.jpg" alt=""/></Link>
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















                <FeaturesOFtheWeek/>
                <Footer/>
            </div>
          
        </div>
    )
}


export default NFTMarketPlace;