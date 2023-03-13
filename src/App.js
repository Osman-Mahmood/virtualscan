import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../src/Componenets/Navbar/Navbar'
import Footer from './Componenets/Footer/Footer';
import BlockChain from './Pages/BlockChain/BlockChain';
import Home from './Pages/Home/Home';
import Extrinsic from './Pages/BlockChain/Extrinsic';
import Transfer from './Pages/BlockChain/Transfer';
import Event from './Pages/BlockChain/Event'
import Assets from './Pages/BlockChain/Assets';
import Account from './Pages/BlockChain/Account';
import Logout from './Pages/BlockChain/Logout';
import Plodash from './Pages/PARACHAIN/Plodash';
import Parachain from './Pages/PARACHAIN/Parachain';
import Auction from './Pages/PARACHAIN/Auction';
import Crowdload from './Pages/PARACHAIN/Crowdload';
import Bid from './Pages/PARACHAIN/Bid';
import XcmDashboard from './Pages/XCM/XcmDashboard';
import XcmChannels from './Pages/XCM/XcmChannels';
import XcmMessages from './Pages/XCM/XcmMessages';
import XcmTransfer from './Pages/XCM/XcmTransfer';
import Staking from './Pages/Staking/Staking';
import Proposal from './Pages/Governance/Proposal';
import Refranda from './Pages/Governance/Refranda'
import Tech from './Pages/Governance/Tech'
import Tips from './Pages/Governance/Tips'
import Tresury from './Pages/Governance/Tresury'
import Motion from './Pages/Governance/Motion'
import Bounties from './Pages/Governance/Bounties'
import RunTime from './Pages/Tools/RunTime';
import AccountFormat from './Pages/Tools/AccountFormat';
import PriceConverter from './Pages/Tools/PriceConverter';
import MultiSig from './Pages/Tools/MultiSig';
import ApiKey from './Pages/Tools/ApiKey';
import ApiDocs from './Pages/Tools/ApiDocs';
import Charts from './Pages/Tools/Charts';
import Searchpage from './Pages/SearchPage/Searchpage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      {/* HOME ROUTE */}
      <Route exact path="/" element={<Home />} />
      {/* BLOCKCHAIN ROUTE */}
      <Route exact path="/block" element={<BlockChain />} />
      <Route exact path="/extrinsic" element={<Extrinsic />} />
      <Route exact path="/transfer" element={<Transfer />} />
      <Route exact path="/event" element={<Event />} />
      <Route exact path="/assets" element={<Assets />} />
      <Route exact path="/account" element={<Account />} />
      <Route exact path="/logout" element={<Logout />} />

      {/* PARACHAIN */}
      <Route exact path="/plodashboard" element={<Plodash />} />
      <Route exact path="/parachain" element={<Parachain />} />
      <Route exact path="/auction" element={<Auction />} />
      <Route exact path="/crowdload" element={<Crowdload />} />
      <Route exact path="/bid" element={<Bid />} />

      {/* XCM  */}
      <Route exact path="/xcmdashboard" element={<XcmDashboard />} />
      <Route exact path="/xcmmessage" element={<XcmMessages />} />
      <Route exact path="/xcmtransfer" element={<XcmTransfer />} />
      <Route exact path="/xcmchannel" element={<XcmChannels />} />

      {/* STAKING */}
      <Route exact path="/staking" element={<Staking />} />

      {/* Governance */}
      <Route exact path="/proposal" element={<Proposal />} />
      <Route exact path="/refranda" element={<Refranda />} />
      <Route exact path="/motion" element={<Motion />} />
      <Route exact path="/tech" element={<Tech />} />
      <Route exact path="/tresury" element={<Tresury />} />
      <Route exact path="/tips" element={<Tips />} />
      <Route exact path="/bounties" element={<Bounties />} />
       {/* tools */}
       <Route exact path="/runtime" element={<RunTime />} />
      <Route exact path="/accountformat" element={<AccountFormat />} />
      <Route exact path="/priceconverter" element={<PriceConverter />} />
      <Route exact path="/charts" element={<Charts />} />
      <Route exact path="/multisig" element={<MultiSig />} />
      <Route exact path="/apiDocs" element={<ApiDocs />} />
      <Route exact path="/apiKey" element={<ApiKey />} />
       {/* SEarch page */}
       <Route exact path="/searchpage" element={<Searchpage />} />
      </Routes>
     
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
