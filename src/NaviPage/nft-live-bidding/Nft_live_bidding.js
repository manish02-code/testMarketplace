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
///////////////////IMPORTINGs MODULES
import { Link } from "react-router-dom";
/////////////////////////////////////////////////////////////////////////
/// IMPORT SCRIPT
//import "../../Pages/assets/js/main"
////////////////////////////////////////////////////////////////////////////////////////////
/////////IMPORTING ALL PAGES

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Side_Menu_Bar/side_menu_bar";
import Footer from "../../components/footer/Footer";

//////////////////////////////////////////////////////////////////////////////////////////
const LiveNFTBiddind = ()=>{

    return(

        
            <div className="main">
            <Header/>
            <Sidebar/>
            
          
                <div class="breadcrumb-area breadcrumb-bg">
                    <div class="container" >
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-md-8">
                                <div class="breadcrumb-content text-center">
                                    <h3 class="title">NFT Live Bidding</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="category-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <ul class="category-list">
                                    <li class="active"><Link to="/Homepage"><img src="assets/img/icons/cat_001.png"  alt=""/> All</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_01.png"  alt=""/> Games</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_02.png"  alt=""/> Art</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_03.png"  alt=""/> Trading Cards</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_04.png"  alt=""/> Music</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_05.png"  alt=""/> Domain Names</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_06.png"  alt=""/> Memes</Link></li>
                                    <li><Link to="/NFTMarketPlace"><img src="assets/img/icons/cat_07.png"  alt=""/> Collectibles</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <section class="inner-explore-products">
                    <div class="container">
                        <div class="explore-product-filter">
                            <div class="section-title mb-45">
                                <h2 class="title">Live Bidding <img src="assets/img/icons/title_icon01.png"  alt=""/></h2>
                            </div>
                            <div class="filter-wrap">
                                <form action="#">
                                    <div class="filter-item">
                                        <label class="title">FILTER BY:</label>
                                        <label class="switch">
                                            <input type="checkbox"/>
                                            <span class="button"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="title">Has list price:</label>
                                        <label class="switch">
                                            <input type="checkbox" checked/>
                                            <span class="button"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="title">Has open offer</label>
                                        <label class="switch">
                                            <input type="checkbox"/>
                                            <span class="button"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="title">Owned by creator</label>
                                        <label class="switch">
                                            <input type="checkbox"/>
                                            <span class="button"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="title">Has sold</label>
                                        <label class="switch">
                                            <input type="checkbox"/>
                                            <span class="button"></span>
                                        </label>
                                    </div>
                                    <button class="btn filter-btn"><i class="fi-sr-filter"></i> filter</button>
                                </form>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><Link to="/AuthorProfile" class="thumb"><img src="assets/img/others/top_col_avatar.png"  alt=""/></Link>By <Link to="/AuthorProfile" class="name">Jonson</Link></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <Link to="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection01.jpg"  alt=""/></Link>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><Link to="/MarketSingle">NFT Collection</Link> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><Link to="/MarketSingle" class="btn">place a bid</Link></li>
                                            <li class="wishlist"><Link to="#">59</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><Link to="/AuthorProfile" class="thumb"><img src="assets/img/others/top_col_avatar.png"  alt=""/></Link>By <Link to="/AuthorProfile" class="name">Jonson</Link></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <Link to="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection05.jpg"  alt=""/></Link>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><Link to="/MarketSingle">Pie Collection</Link> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><Link to="/MarketSingle" class="btn">place a bid</Link></li>
                                            <li class="wishlist"><Link to="#">59</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><Link to="/AuthorProfile" class="thumb"><img src="assets/img/others/top_col_avatar.png"  alt=""/></Link>By <Link to="/AuthorProfile" class="name">Jonson</Link></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <Link to="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection06.jpg"  alt=""/></Link>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><Link to="/MarketSingle">Craft Collection</Link> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><Link to="/MarketSingle" class="btn">place a bid</Link></li>
                                            <li class="wishlist"><Link to="#">59</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><Link to="/AuthorProfile" class="thumb"><img src="assets/img/others/top_col_avatar.png"  alt=""/></Link>By <Link to="/AuthorProfile" class="name">Jonson</Link></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <Link to="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection07.jpg"  alt=""/></Link>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><Link to="/MarketSingle">Artwork Collection</Link> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><Link to="/MarketSingle" class="btn">place a bid</Link></li>
                                            <li class="wishlist"><Link to="#">59</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><Link to="/AuthorProfile" class="thumb"><img src="assets/img/others/top_col_avatar.png"  alt=""/></Link>By <Link to="/AuthorProfile" class="name">Jonson</Link></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <Link to="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection08.jpg"  alt=""/></Link>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><Link to="/MarketSingle">NFT Collection</Link> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><Link to="/MarketSingle" class="btn">place a bid</Link></li>
                                            <li class="wishlist"><Link to="#">59</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><Link to="/AuthorProfile" class="thumb"><img src="assets/img/others/top_col_avatar.png"  alt=""/></Link>By <Link to="/AuthorProfile" class="name">Jonson</Link></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <Link to="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection09.jpg"  alt=""/></Link>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><Link to="/MarketSingle">Pet Collection</Link> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><Link to="/MarketSingle" class="btn">place a bid</Link></li>
                                            <li class="wishlist"><Link to="#">59</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><Link to="/AuthorProfile" class="thumb"><img src="assets/img/others/top_col_avatar.png"  alt=""/></Link>By <Link to="/AuthorProfile" class="name">Jonson</Link></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <Link to="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection10.jpg"  alt=""/></Link>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><Link to="/MarketSingle">NFT Collection</Link> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><Link to="/MarketSingle" class="btn">place a bid</Link></li>
                                            <li class="wishlist"><Link to="#">59</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><Link to="/AuthorProfile" class="thumb"><img src="assets/img/others/top_col_avatar.png"  alt=""/></Link>By <Link to="/AuthorProfile" class="name">Jonson</Link></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <Link to="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link to="/NFTMarketPlace">Artwork</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Action</Link></li>
                                                    <li><Link to="/NFTMarketPlace">Author Action</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="collection-item-thumb">
                                        <Link to="/MarketSingle"><img src="assets/img/others/top_collection11.jpg"  alt=""/></Link>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><Link to="/MarketSingle">Action Collection</Link> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><Link to="/MarketSingle" class="btn">place a bid</Link></li>
                                            <li class="wishlist"><Link to="#">59</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        









            

            <Footer/>
            </div>

        
    )
}


export default LiveNFTBiddind;