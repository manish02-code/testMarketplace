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

const acitivity = ()=>{

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
                                    <h3 className="title">NFT Activity</h3>
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







                <div className="activity-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 order-2 order-lg-0">
                                <aside className="activity-sidebar">
                                    <ul className="activity-sidebar-list">
                                        <li>
                                            <Link to="/NFTMarketPlace">
                                                <div className="icon"><i className="fi-sr-bug"></i></div>
                                                <p>Domain Names <span>find your website name</span></p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/NFTMarketPlace">
                                                <div className="icon"><i className="fi-sr-crown"></i></div>
                                                <p>Collectibles</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/NFTMarketPlace">
                                                <div className="icon"><i className="fi-sr-mode-landscape"></i></div>
                                                <p>Photography</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/NFTMarketPlace">
                                                <div className="icon"><i className="fi-sr-snowflake"></i></div>
                                                <p>Virtual Worlds</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/NFTMarketPlace">
                                                <div className="icon"><i className="fi-sr-tennis"></i></div>
                                                <p>Sports</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/NFTMarketPlace">
                                                <div className="icon"><i className="fi-sr-vector"></i></div>
                                                <p>Trading Cards</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="welcome-activity">
                                    <div className="welcome-activity-img">
                                        <img src="assets/img/others/welcome_img01.png" alt=""/>
                                    </div>
                                    <div className="welcome-activity-content">
                                        <h3 className="title">welcome to NFT Activity</h3>
                                        <p>The top NFTs on Nftmar, ranked by volume, floor price and other <Link to="/LoginRegister">statistics.</Link></p>
                                    </div>
                                </div>
                                <div className="activity-table-wrap">
                                    <div className="activity-table-nav">
                                        <h4 className="title">All Activity</h4>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="nft-tab" data-bs-toggle="tab" data-bs-target="#nft" type="button"
                                                    role="tab" aria-controls="nft" aria-selected="true">All NFT</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="month-tab" data-bs-toggle="tab" data-bs-target="#month" type="button"
                                                    role="tab" aria-controls="month" aria-selected="false">Last Month</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="nft" role="tabpanel" aria-labelledby="nft-tab">
                                            <div className="activity-table-responsive">
                                                <table className="table activity-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Item Details</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">From</th>
                                                            <th scope="col">To</th>
                                                            <th scope="col" className="time">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author.png" alt=""/> <Link to="/AuthorProfile">Art collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.025</td>
                                                            <td>17</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>a minute ago</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author02.png" alt=""/> <Link to="/AuthorProfile">Pie collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.055</td>
                                                            <td>24</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>2 minute ago</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author03.png" alt=""/> <Link to="/AuthorProfile">Con collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.075</td>
                                                            <td>22</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>3 minute ago</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author04.png" alt=""/> <Link to="/AuthorProfile">Tun collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.025</td>
                                                            <td>18</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>4 minute ago</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author05.png" alt=""/> <Link to="/AuthorProfile">Art collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.095</td>
                                                            <td>16</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>5 minute ago</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author06.png" alt=""/> <Link to="/AuthorProfile">Art collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.115</td>
                                                            <td>20</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>6 minute ago</td>
                                                            
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="month" role="tabpanel" aria-labelledby="month-tab">
                                            <div className="activity-table-responsive">
                                                <table className="table activity-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Item Details</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">From</th>
                                                            <th scope="col">To</th>
                                                            <th scope="col" className="time">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author06.png" alt=""/> <Link to="/AuthorProfile">Art collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.025</td>
                                                            <td>17</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>a minute ago</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author05.png" alt=""/> <Link to="/AuthorProfile">Pie collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.055</td>
                                                            <td>24</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>2 minute ago</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author04.png" alt=""/> <Link to="/AuthorProfile">Con collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.075</td>
                                                            <td>22</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>3 minute ago</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author03.png" alt=""/> <Link to="/AuthorProfile">Tun collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.025</td>
                                                            <td>18</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>4 minute ago</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author02.png" alt=""/> <Link to="/AuthorProfile">Art collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.095</td>
                                                            <td>16</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>5 minute ago</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author.png" alt=""/> <Link to="/AuthorProfile">Art collection</Link>
                                                            </th>
                                                            <td className="price"><img src="assets/img/icons/coin.svg" alt=""/> 0.115</td>
                                                            <td>20</td>
                                                            <td>Meta</td>
                                                            <td>A22F7</td>
                                                            <td>6 minute ago</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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


export default acitivity;