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


const MarketSingle = () => {

    return (

        <div>
            <div className="main-content">
                <Sidebar />
                <Header />


                <div className="breadcrumb-area market-single-breadcrumb-area">
                    <div className="breadcrumb-bg"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="market-single-breadcrumb">
                                    <div className="home-back-btn"><Link to="/Homepage">go back to home</Link></div>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/Homepage">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>











                <section className="market-single-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="market-single-img">
                                    <img src="assets/img/others/market_details_img.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="market-single-top">
                                    <div className="market-single-title-wrap">
                                        <h2 className="title">Anatomy Science Club</h2>
                                        <ul className="market-details-meta">
                                            <li>Owned by <Link to="#">B14484</Link></li>
                                            <li className="wishlist">6 favorites</li>
                                        </ul>
                                    </div>
                                    <div className="market-single-action">
                                        <ul>
                                            <li><Link to="#"><i className="fas fa-share-alt"></i></Link></li>
                                            <li><Link to="#"><i className="fi-sr-menu-dots"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="market-single-creator">
                                            <div className="thumb"><img src="assets/img/others/mp_avatar01.png" alt=""/></div>
                                            <div className="info">
                                                <h5 className="title"><Link to="/AuthorProfile">David Michels</Link></h5>
                                                <span>Creators by</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="market-single-creator">
                                            <div className="thumb"><img src="assets/img/others/mp_avatar02.png" alt=""/></div>
                                            <div className="info">
                                                <h5 className="title"><Link to="/AuthorProfile">MR. Tartos</Link></h5>
                                                <span>Collection by</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market-single-content">
                                    <p>What even is an NFT? NFT stands for non-fungible token, which basically means that it's one-of-kind digital asset that belongs to you and you only. The most popular NFTs right now include artwork and music also include videos.</p>
                                </div>
                                <div className="highest-bid-wrap">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                            <h5 className="title">Highest bid</h5>
                                            <div className="highest-bid-avatar">
                                                <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt=""/></div>
                                                <div className="content">
                                                    <h5 className="title"><Link to="/AuthorProfile">Tomas lindahl</Link></h5>
                                                    <span>3.005wETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                            <h5 className="title">Auction has ended</h5>
                                            <div className="bid-countdown-wrap">
                                                <div className="coming-time" data-countdown="2022/05/16"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="#" className="place-bid-btn">Place a bid</Link>
                            </div>
                            <div className="col-lg-6">
                                <div className="activity-table-responsive">
                                    <table className="table activity-table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="title">Description</th>
                                                <th scope="col">Floor Price</th>
                                                <th scope="col">Owners</th>
                                                <th scope="col" className="time">Assets</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="author">
                                                    <img src="assets/img/others/mp_activity_author01.png" alt=""/> <Link to="/NFTMarketPlace">Trading Pet</Link>
                                                </th>
                                                <td>+5486%</td>
                                                <td>-965%</td>
                                                <td>2,356 ETH</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="author">
                                                    <img src="assets/img/others/mp_activity_author02.png" alt=""/> <Link to="/NFTMarketPlace">Trading Craft</Link>
                                                </th>
                                                <td>+5486%</td>
                                                <td>-965%</td>
                                                <td>2,356 ETH</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="author">
                                                    <img src="assets/img/others/mp_activity_author03.png" alt=""/> <Link to="/NFTMarketPlace">Trading Cards</Link>
                                                </th>
                                                <td>+5486%</td>
                                                <td>-965%</td>
                                                <td>2,356 ETH</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bid-history-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="bid-tab" data-bs-toggle="tab" data-bs-target="#bid" type="button"
                                                role="tab" aria-controls="bid" aria-selected="true">Bid History</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button"
                                                role="tab" aria-controls="info" aria-selected="false">Info</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="provenance-tab" data-bs-toggle="tab" data-bs-target="#provenance" type="button" role="tab" aria-controls="provenance" aria-selected="false">Provenance</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="bid" role="tabpanel" aria-labelledby="bid-tab">
                                            <div className="bid-history-overflow scroll">
                                                <ul className="bid-history-list">
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="/AuthorProfile">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar02.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="/AuthorProfile">David Michels</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar03.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="/AuthorProfile">Jonny Dev</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar04.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="/AuthorProfile">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar05.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="/AuthorProfile">Tomas Komai</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar06.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="/AuthorProfile">Tomas Harne</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="/AuthorProfile">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                            <div className="bid-history-overflow scroll">
                                                <ul className="bid-history-list">
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar02.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar03.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar04.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar05.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar06.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar02.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="provenance" role="tabpanel" aria-labelledby="provenance-tab">
                                            <div className="bid-history-overflow scroll">
                                                <ul className="bid-history-list">
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar02.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar03.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar04.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar05.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar06.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bid-history-item">
                                                            <div className="highest-bid-avatar">
                                                                <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt=""/></div>
                                                                <div className="content">
                                                                    <h5 className="title"><Link to="#">Tomas lindahl</Link></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div className="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 className="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <Footer/>






            </div>


        </div>

    )
}


export default MarketSingle;