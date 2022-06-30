import React, { useEffect } from 'react';
//////////////////////////////////////////////////////////////////////////////////////////////
////Testing file
import Home from "./testfile/homes/Home"
import Create from "./testfile/Create/Create"
import MyListedItems from "./testfile/MyListedItems/MyListedItems"
import MyPurchases from "./testfile/MyPurchases/MyPurchases"
import { Spinner } from 'react-bootstrap'
import Navigation  from './testfile/Navigation/Navbar';
//////////////////////////////////////////////////////////////////////////////////////////////
/////IMPORTING ALL Pages///////
// import Homepage from './NaviPage/Homepage/Homepage';
// import Activity from './NaviPage/activity/Activity';
// import AuthorProfile from './NaviPage/author-profile/author-profile';
// import Blog from './NaviPage/blog/blolg';
// import BlogDitails from './NaviPage/blog-details/blog-details';
// import Category from './NaviPage/category/category';
// import Collection from './NaviPage/collections/collections';
// import ConnectWallet from './NaviPage/connect-wallet/connect-wallet';
// import CreateItem from './NaviPage/create-item/create-item';
// import Creators from './NaviPage/creators/creators';
// import LoginRegister from './NaviPage/login-register/login-register';
// import MarketSingle from './NaviPage/market-single/market-single';
// import LiveNFTBiddind from './NaviPage/nft-live-bidding/Nft_live_bidding';
// import NFTMarketPlace from './NaviPage/nft-marketplace/nft-marketplace';
// import Ranking from './NaviPage/ranking/ranking';
// import PrivacyAndTerms from './NaviPage/Privacy&Terms/PrivacyAndTerms';
// import Contact from './NaviPage/Contact/Contact';
////////////////////////////////////////////////////////////////////////////////////////////
//////  IMPORTING CONTRACT ABI AND CONTRACT ADDRESS.
import EarnestroiNFTaddress from "./contractsData/EarnestroiNFTaddress.json";
import EarnestroiNFT from "./contractsData/EarnestroiNFT.json";

import EarnestroiMarketPlaceaddress from "./contractsData/EarnestroiMarketPlaceaddress.json";
import EarnestroiMarketPlace from "./contractsData/EarnestroiMarketPlace.json";
//////////////////////////////////////////////////////////////////////////////////////////////
///// IMPORTING MODULES
import { ethers } from "ethers";
import { useState } from "react";    


//////////////////////////////////////////////////////////////////////////////////////////////

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
/////////////////////////////////////////////////////////////////////////////////////////////



//import { BrowserRouter, Route, Routes,   } from 'react-router-dom';


function App() {

  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [marketplace, setMarketplace] = useState({})
  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer)
  }
  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(EarnestroiMarketPlaceaddress.address, EarnestroiMarketPlace.abi, signer)
    setMarketplace(marketplace)
    const nft = new ethers.Contract(EarnestroiNFTaddress.address, EarnestroiNFT.abi, signer)
    setNFT(nft)
    setLoading(false)
  }

  return (
   
      <div className="App">
        <>
          <Navigation web3Handler={web3Handler} account={account} />
        </>
        <div>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
              <Spinner animation="border" style={{ display: 'flex' }} />
              <p className='mx-3 my-0'>Awaiting Metamask Connection...</p>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={
                <Home marketplace={marketplace} nft={nft} />
              } />
              <Route path="/create" element={
                <Create marketplace={marketplace} nft={nft} />
              } />
              <Route path="/my-listed-items" element={
                <MyListedItems marketplace={marketplace} nft={nft} account={account} />
              } />
              <Route path="/my-purchases" element={
                <MyPurchases marketplace={marketplace} nft={nft} account={account} />
              } />
            </Routes>
          )}
        </div>
      </div>

  );



    //   <>
    //   <Routes>
    //      <Route path='/' element={<Homepage NFT={Earnestroi_NFT} Marketplace={EarnestroiNFTMarketplace} />}  ></Route>
    //      <Route path='/Homepage' element={<Homepage NFT={Earnestroi_NFT} Marketplace={EarnestroiNFTMarketplace} /> }  ></Route>
    //      <Route path='/activity' element={< Activity/>}  ></Route>
    //      <Route path='/LiveNFTBiddind' element={<LiveNFTBiddind />}  ></Route>
    //      <Route path='/AuthorProfile' element={<AuthorProfile />}  ></Route>
    //      <Route path='/Blog' element={<Blog />}  ></Route>
    //      <Route path='/BlogDitails' element={<BlogDitails />}  ></Route>
    //      <Route path='/Category' element={<Category />}  ></Route>
    //      <Route path='/Collection' element={<Collection />}  ></Route>
    //      <Route path='/ConnectWallet' element={<ConnectWallet />}  ></Route>
    //      <Route path='/CreateItem' element={<CreateItem />}  ></Route>
    //      <Route path='/Creators' element={<Creators />}  ></Route>
    //      <Route path='/LoginRegister' element={<LoginRegister />}  ></Route>
    //      <Route path='/MarketSingle' element={<MarketSingle />}  ></Route>
    //      <Route path='/NFTMarketPlace' element={<NFTMarketPlace />}  ></Route>
    //      <Route path='/Ranking' element={<Ranking />}  ></Route>
    //      <Route path='/PrivacyAndTerms' element={<PrivacyAndTerms />}  ></Route>
    //      <Route path='/Contact' element={<Contact />}  ></Route>

    //     </Routes>
    //      </>

   

}




export default App;

