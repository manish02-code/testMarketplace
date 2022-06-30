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


const CategoryArea=() =>{

    return(
    
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

    )
}


export default CategoryArea;

