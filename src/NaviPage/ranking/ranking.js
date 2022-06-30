////////////////////////////////////////////////////////////////////////////////////////////
//////////// IMPORTING  FILES
import Sidebar from "../../components/Side_Menu_Bar/side_menu_bar";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";

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


const Ranking = ()=>{

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
                                    <h3 className="title">NFT Ranking</h3>
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
                                    <div className="welcome-activity-img welcome-img-two">
                                        <img src="assets/img/others/welcome_img02.png" alt=""/>
                                    </div>
                                    <div className="welcome-activity-content">
                                        <h3 className="title">welcome to NFT Activity</h3>
                                        <p>The top NFTs on Nftmar, ranked by volume, floor price and other <Link to="login-register.html"></Link></p>
                                    </div>
                                </div>
                                <div className="activity-table-wrap">
                                    <div className="activity-table-nav">xxxc
                                        <h4 className="title">All Collection</h4>
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
                                                            <th scope="col">Collection</th>
                                                            <th scope="col">Volume</th>
                                                            <th scope="col">24h %</th>
                                                            <th scope="col">7d %</th>
                                                            <th scope="col">Floor Price</th>
                                                            <th scope="col">Owners</th>
                                                            <th scope="col" className="time">Assets</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author.png" alt=""/> <Link to="/NFTMarketPlace">Art collection</Link>
                                                            </th>
                                                            <td className="price">13,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>45k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author02.png" alt=""/> <Link to="/NFTMarketPlace">Leo collection</Link>
                                                            </th>
                                                            <td className="price">15,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>85k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author03.png" alt=""/> <Link to="/NFTMarketPlace">Mar collection</Link>
                                                            </th>
                                                            <td className="price">19,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>15k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author04.png" alt=""/> <Link to="/NFTMarketPlace">Pie collection</Link>
                                                            </th>
                                                            <td className="price">16,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>13k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author05.png" alt=""/> <Link to="/NFTMarketPlace">Tun collection</Link>
                                                            </th>
                                                            <td className="price">21,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>20k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author06.png" alt=""/> <Link to="/NFTMarketPlace">Kol collection</Link>
                                                            </th>
                                                            <td className="price">29,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>22k</td>
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
                                                            <th scope="col">Collection</th>
                                                            <th scope="col">Volume</th>
                                                            <th scope="col">24h %</th>
                                                            <th scope="col">7d %</th>
                                                            <th scope="col">Floor Price</th>
                                                            <th scope="col">Owners</th>
                                                            <th scope="col" className="time">Assets</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author06.png" alt=""/> <Link to="/NFTMarketPlace">Art collection</Link>
                                                            </th>
                                                            <td className="price">13,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>45k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author05.png" alt=""/> <Link to="/NFTMarketPlace">Leo collection</Link>
                                                            </th>
                                                            <td className="price">15,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>85k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author04.png" alt=""/> <Link to="/NFTMarketPlace">Mar collection</Link>
                                                            </th>
                                                            <td className="price">19,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>15k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author03.png" alt=""/> <Link to="/NFTMarketPlace">Pie collection</Link>
                                                            </th>
                                                            <td className="price">16,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>13k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author02.png" alt=""/> <Link to="/NFTMarketPlace">Tun collection</Link>
                                                            </th>
                                                            <td className="price">21,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>20k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="author">
                                                                <img src="assets/img/others/activity_author.png" alt=""/> <Link to="/NFTMarketPlace">Kol collection</Link>
                                                            </th>
                                                            <td className="price">29,5624</td>
                                                            <td>+5486%</td>
                                                            <td>-965%</td>
                                                            <td>10,2356 ETH</td>
                                                            <td>4.3k</td>
                                                            <td>22k</td>
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


export default Ranking;