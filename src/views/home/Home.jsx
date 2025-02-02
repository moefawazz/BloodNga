import React, { useEffect, useState } from 'react';
import home from "../../assests/home.jpg"
import { ImageHolder, MainDiv } from './Home.style';

const Home = () => {


  return (
<>
<ImageHolder src={home}/>

<MainDiv>
Who are we ?
</MainDiv>
</>
  );
};

export default Home;
