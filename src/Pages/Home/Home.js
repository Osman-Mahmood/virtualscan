import React from 'react'
import Block from '../../Componenets/Home/Blocks/Transfers/Block';
import FocusChain from '../../Componenets/Home/FocusChainData/FocusChain';
import PauseOnHover from '../../Componenets/Home/FocusChainData/Slick';
import Parachain from '../../Componenets/Home/Parachain/Parachain';
import Token from '../../Componenets/Home/TokenUI/Token';
import Search from '../../Componenets/Search/Search';

const Home = () => {
  return (
    <div>
      <Search />
      {/* <PauseOnHover /> */}
      <FocusChain />
      <Token />
      <Block />
      <Parachain />
    </div>
  )
}

export default Home
