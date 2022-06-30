////////////////////////////////////////////////////////////////////////////////////////////
//////////// IMPORTING  FILES
import Sidebar from "../../components/Side_Menu_Bar/side_menu_bar";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Offcanvas from "../../components/Off_canvas/off_canvas";
import FeaturesOFtheWeek from "../../components/Features of the week/Features_of_the_week";
///////////////////////////////////////////////////////////////////////////////////////


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
import { Link } from "react-router-dom";
///////////////////////////////////////////////////////////////////////////////////////////


const Category = () => {

    return (

        <div>
            <Sidebar />
            <Header />


            <div className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content text-center">
                                <h3 className="title">NFT Browse Category</h3>
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
                                <li className="active"><Link to="index.html"><img src="assets/img/icons/cat_001.png" alt="" /> All</Link></li>
                                <li><Link to="nft-marketplace.html"><img src="assets/img/icons/cat_01.png" alt="" /> Games</Link></li>
                                <li><Link to="nft-marketplace.html"><img src="assets/img/icons/cat_02.png" alt="" /> Art</Link></li>
                                <li><Link to="nft-marketplace.html"><img src="assets/img/icons/cat_03.png" alt="" /> Trading Cards</Link></li>
                                <li><Link to="nft-marketplace.html"><img src="assets/img/icons/cat_04.png" alt="" /> Music</Link></li>
                                <li><Link to="nft-marketplace.html"><img src="assets/img/icons/cat_05.png" alt="" /> Domain Names</Link></li>
                                <li><Link to="nft-marketplace.html"><img src="assets/img/icons/cat_06.png" alt="" /> Memes</Link></li>
                                <li><Link to="nft-marketplace.html"><img src="assets/img/icons/cat_07.png" alt="" /> Collectibles</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <div className="browse-category-area pt-80 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <aside className="browse-category-sidebar">
                                <div className="section-title mb-25">
                                    <h2 className="title">Status <img src="assets/img/icons/title_icon01.png" alt=""/></h2>
                                </div>
                                <div className="widget category-widget">
                                    <div className="widget-inner">
                                        <ul className="sidebar-tags">
                                            <li><Link to="#">Buy Now</Link></li>
                                            <li><Link to="#">On Auction</Link></li>
                                            <li><Link to="#">New</Link></li>
                                            <li><Link to="#">Has Offers</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget category-widget">
                                    <h4 className="category-widget-title">Price</h4>
                                    <div className="widget-inner">
                                        <form action="#" className="sidebar-price-filter">
                                            <div className="form-grp">
                                                <input type="text" placeholder="Us Dollar" />
                                                <span className="dollar">$</span>
                                            </div>
                                            <div className="form-grp">
                                                <input type="text" placeholder="Min" />
                                                <span className="to">to</span>
                                                <input type="text" placeholder="Max" />
                                            </div>
                                        </form>
                                        </div>


                                    </div>
                                    <div className="widget category-widget">
                                        <h4 className="category-widget-title">On sale in</h4>
                                        <div className="widget-inner">
                                            <form action="#" className="on-sale">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" for="flexRadioDefault1">ETH</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                    <label className="form-check-label" for="flexRadioDefault2">WETH</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                            </aside>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-top">
                                            <ul>
                                                <li className="avatar"><Link to="author-profile.html" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></Link>By <Link to="author-profile.html" className="name">Jonson</Link></li>
                                                <li className="info-dots dropdown">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="nft-marketplace.html">Artwork</Link></li>
                                                        <li><Link to="nft-marketplace.html">Action</Link></li>
                                                        <li><Link to="nft-marketplace.html">Author Action</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="collection-item-thumb">
                                            <Link to="market-single.html"><img src="assets/img/others/top_collection01.jpg" alt="" /></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link to="market-single.html">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="bid"><Link to="market-single.html" className="btn">place a bid</Link></li>
                                                <li className="wishlist"><Link to="#">59</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-top">
                                            <ul>
                                                <li className="avatar"><Link to="author-profile.html" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></Link>By <Link to="author-profile.html" className="name">Jonson</Link></li>
                                                <li className="info-dots dropdown">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="nft-marketplace.html">Artwork</Link></li>
                                                        <li><Link to="nft-marketplace.html">Action</Link></li>
                                                        <li><Link to="nft-marketplace.html">Author Action</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="collection-item-thumb">
                                            <Link to="market-single.html"><img src="assets/img/others/top_collection05.jpg" alt="" /></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link to="market-single.html">Peo Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="bid"><Link to="market-single.html" className="btn">place a bid</Link></li>
                                                <li className="wishlist"><Link to="#">59</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-top">
                                            <ul>
                                                <li className="avatar"><Link to="author-profile.html" className="thumb"><img src="assets/img/others/top_col_avatar.png"
                                                    alt="" /></Link>By <Link to="author-profile.html" className="name">Jonson</Link></li>
                                                <li className="info-dots dropdown">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="nft-marketplace.html">Artwork</Link></li>
                                                        <li><Link to="nft-marketplace.html">Action</Link></li>
                                                        <li><Link to="nft-marketplace.html">Author Action</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="collection-item-thumb">
                                            <Link to="market-single.html"><img src="assets/img/others/top_collection06.jpg" alt="" /></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link to="market-single.html">Craft Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="bid"><Link to="market-single.html" className="btn">place a bid</Link></li>
                                                <li className="wishlist"><Link to="#">59</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-top">
                                            <ul>
                                                <li className="avatar"><Link to="author-profile.html" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></Link>By <Link to="author-profile.html" className="name">Jonson</Link></li>
                                                <li className="info-dots dropdown">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="nft-marketplace.html">Artwork</Link></li>
                                                        <li><Link to="nft-marketplace.html">Action</Link></li>
                                                        <li><Link to="nft-marketplace.html">Author Action</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="collection-item-thumb">
                                            <Link to="market-single.html"><img src="assets/img/others/top_collection07.jpg" alt="" /></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link to="market-single.html">Action Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="bid"><Link to="market-single.html" className="btn">place a bid</Link></li>
                                                <li className="wishlist"><Link to="#">59</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-top">
                                            <ul>
                                                <li className="avatar"><Link to="author-profile.html" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></Link>By <Link to="author-profile.html" className="name">Jonson</Link></li>
                                                <li className="info-dots dropdown">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="nft-marketplace.html">Artwork</Link></li>
                                                        <li><Link to="nft-marketplace.html">Action</Link></li>
                                                        <li><Link to="nft-marketplace.html">Author Action</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="collection-item-thumb">
                                            <Link to="market-single.html"><img src="assets/img/others/top_collection08.jpg" alt="" /></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link to="market-single.html">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="bid"><Link to="market-single.html" className="btn">place a bid</Link></li>
                                                <li className="wishlist"><Link to="#">59</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-top">
                                            <ul>
                                                <li className="avatar"><Link to="author-profile.html" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></Link>By <Link to="author-profile.html" className="name">Jonson</Link></li>
                                                <li className="info-dots dropdown">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="nft-marketplace.html">Artwork</Link></li>
                                                        <li><Link to="nft-marketplace.html">Action</Link></li>
                                                        <li><Link to="nft-marketplace.html">Author Action</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="collection-item-thumb">
                                            <Link to="market-single.html"><img src="assets/img/others/top_collection09.jpg" alt="" /></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link to="market-single.html">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="bid"><Link to="market-single.html" className="btn">place a bid</Link></li>
                                                <li className="wishlist"><Link to="#">59</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-top">
                                            <ul>
                                                <li className="avatar"><Link to="author-profile.html" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></Link>By <Link to="author-profile.html" className="name">Jonson</Link></li>
                                                <li className="info-dots dropdown">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="nft-marketplace.html">Artwork</Link></li>
                                                        <li><Link to="nft-marketplace.html">Action</Link></li>
                                                        <li><Link to="nft-marketplace.html">Author Action</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="collection-item-thumb">
                                            <Link to="market-single.html"><img src="assets/img/others/top_collection10.jpg" alt="" /></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link to="market-single.html">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="bid"><Link to="market-single.html" className="btn">place a bid</Link></li>
                                                <li className="wishlist"><Link to="#">59</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-top">
                                            <ul>
                                                <li className="avatar"><Link to="author-profile.html" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></Link>By <Link to="author-profile.html" className="name">Jonson</Link></li>
                                                <li className="info-dots dropdown">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="nft-marketplace.html">Artwork</Link></li>
                                                        <li><Link to="nft-marketplace.html">Action</Link></li>
                                                        <li><Link to="nft-marketplace.html">Author Action</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="collection-item-thumb">
                                            <Link to="market-single.html"><img src="assets/img/others/top_collection11.jpg" alt="" /></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link to="market-single.html">Dark Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="bid"><Link to="market-single.html" className="btn">place a bid</Link></li>
                                                <li className="wishlist"><Link to="#">59</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-top">
                                            <ul>
                                                <li className="avatar"><Link to="author-profile.html" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></Link>By <Link to="author-profile.html" className="name">Jonson</Link></li>
                                                <li className="info-dots dropdown">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="nft-marketplace.html">Artwork</Link></li>
                                                        <li><Link to="nft-marketplace.html">Action</Link></li>
                                                        <li><Link to="nft-marketplace.html">Author Action</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="collection-item-thumb">
                                            <Link to="market-single.html"><img src="assets/img/others/top_collection02.jpg" alt="" /></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link to="market-single.html">Artwork Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="bid"><Link to="market-single.html" className="btn">place a bid</Link></li>
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


            <FeaturesOFtheWeek/>

            <Footer />

        </div>
    )
}


export default Category;