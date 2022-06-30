////////////////////////////////////////////////////////////////////////////////////////////
//////////// IMPORTING  FILES
import Sidebar from "../../components/Side_Menu_Bar/side_menu_bar";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Offcanvas from "../../components/Off_canvas/off_canvas";
import { Link } from "react-router-dom";
///////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////
/////IMPORTING ALL CSS

// import "../../Pages/assets/css/style.css";
// import "../../Pages/assets/css/bootstrap.min.css"
// import "../../Pages/assets/css/default.css"
// import "../../Pages/assets/css/flaticon.css"
// import "../../Pages/assets/css/fontawesome-all.min.css"
// //import "../../Pages/assets/css/jquery.mCustomScrollbar.min.css"
// import "../../Pages/assets/css/magnific-popup.css"
// import "../../Pages/assets/css/responsive.css"
// import "../../Pages/assets/css/slick.css"
// import "../../Pages/assets/css/uicons-solid-rounded.css"
// import "../../Pages/assets/css/animate.min.css"
/////////////////////////////////////////////////////////////////////////////////////////////


const CreateItem = ()=>{

    return(

        <div>
            <Sidebar/>
            <Header/>
     
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="breadcrumb-content text-center">
                                    <h3 className="title">Create Item</h3>
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









                <div className="create-item-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <aside className="create-item-sidebar">
                                    <h4 className="title">Preview item</h4>
                                    <div className="top-collection-item mb-0">
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
                                            <h5 className="title"><Link to="/MarketSingle">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="bid"><Link to="/MarketSingle" className="btn">place a bid</Link></li>
                                                <li className="wishlist"><Link to="#">59</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="method-wrap">
                                    <h4 className="title">Select method</h4>
                                    <ul className="method-list">
                                        <li><Link to="#" className="active"><i className="flaticon-tag"></i> Fixed Price</Link></li>
                                        <li><Link to="#"><i className="flaticon-timer"></i> Time Auctions</Link></li>
                                        <li><Link to="#"><i className="flaticon-add-user"></i> Open For Bids</Link></li>
                                    </ul>
                                </div>
                                <form action="#" className="create-item-form">
                                    <div className="form-grp">
                                        <label for="file">Upload file</label>
                                        <input id="file" type="file"/>
                                    </div>
                                    <div className="form-grp">
                                        <label for="price">Price</label>
                                        <input id="price" type="text" placeholder="Enter price for one item (ETH)"/>
                                    </div>
                                    <div className="form-grp">
                                        <label for="title">Title</label>
                                        <input id="title" type="text" placeholder="Enter price for one item (ETH)"/>
                                    </div>
                                    <div className="form-grp">
                                        <label for="desc">Description</label>
                                        <textarea name="message" id="desc" placeholder="e.g. This is very limited item"></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-grp">
                                                <label for="royalties">Royalties</label>
                                                <input id="royalties" type="text" placeholder="(10%)"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-grp">
                                                <label for="size">Size</label>
                                                <input id="size" type="text" placeholder="e.g. Size"/>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn">Create Item</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>




            <Footer/>
        </div>
        
    )
}


export default CreateItem;