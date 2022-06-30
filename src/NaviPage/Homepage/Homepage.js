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
import { ethers } from "ethers";
import { useEffect, useState } from "react";

//////////////////////////////////////////////////////////////////////////////////////////////
/////IMPORTING ALL CSS

import "../../Pages/assets/css/style.css";
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


const Homepage = (NFT, Marketplace) => {
   
    const [item,setItems]=useState([]);
 const[loading,setLoading]=useState(true);
    const loadMarketPlaceItem= async()=>{
        const itemCount=await Marketplace.NFTCount();
        let items=[];
        for(let i=0;i<=itemCount;i++){
            const item= await Marketplace.mapDetails[i];
            if(!item.sold){
                //getting URI and URL from nft contract 
                const uri= await NFT.tokenURI(item.tokenID);
                //use Uri to fecth the nft metadata store on IPSFF
                const response= await fetch(uri)
                const metadata= await response.json()
                ////Now getting total price of NFT 
                const totalPrice= await Marketplace.GetTotalValue(item.tokenID)
                //Add Data to Items array
                items.push({
                    totalPrice,
                    itemId:item.tokenID,
                    seller:item.seller,
                    name:metadata.name,
                    description: metadata.description,
                    image:metadata.image
                })


            }
        }

        setItems(items);
        setLoading(flase)
        
    }

    const buyMarketItem = async (item)=>{
        await (await Marketplace.BuyNFT(item.tokenID,{value : item.totalPrice})).wait()
        loadMarketPlaceItem()

    }

    useEffect(()=>{loadMarketPlaceItem()},[])
    if (loading) return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Loading...</h2>
        </main>
      )
    
 


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//         ///////              Buying Item Function 
//         const buyMarketItem = async (item) => {
//             await (await Marketplace.BuyNFT(item.NFTID, { value: item.FinalPrice })).wait()
//             loadMarketPlaceItem()
//         }

//         ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        return (
            <div className="flex justify-center">
            {items.length > 0 ?
              <div className="px-5 container">
                <Row xs={1} md={2} lg={4} className="g-4 py-5">
                  {items.map((item, idx) => (
                    <Col key={idx} className="overflow-hidden">
                      <Card>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body color="secondary">
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>
                            {item.description}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <div className='d-grid'>
                            <Button onClick={() => buyMarketItem(item)} variant="primary" size="lg">
                              Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
                            </Button>
                          </div>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
              : (
                <main style={{ padding: "1rem 0" }}>
                  <h2>No listed assets</h2>
                </main>
              )}
          </div>
        );





























            // <div>
            //     <div id='Main_Container'>
            //         <Sidebar />
            //         <Offcanvas />
            //         <Header />
            //         <div id='Banner-area'>
            //             <div className="banner-bg"> 
            //                 <div className="banner-area">
            //                     <div className="container">
            //                         <div className="row">
            //                             <div className="col-lg-6 col-md-8">
            //                                 <div className="banner-content">
            //                                     <h2 className="title">Buy and sell digital art <br></br> <span>NFT</span> collection</h2>
            //                                     <p>Everything you need to build, host, scale amazing dapps free by creating account today</p>
            //                                     <Link to="/LoginRegister" className="banner-btn">Let’s get started <i className="fi-sr-arrow-right"></i></Link>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
                   
            //         <Footer />
            //     </div>

            // </div>
        
    }



export default Homepage;
