import React, { useState } from 'react'
import donateBlood from "../../../src/assests/PhoneCover.jpg"
import { ImageHolder, MainDiv, StyledButton } from './donate.style'
import StyledInput from '../../elements/styledInput/StyledInput'
import Popup from '../../elements/popUp/PopUp'
import DonateInputs from './donateInputs'
import { UpperDesign } from '../request/Request.style'
const Donate = () => {
  const[isPopupOpen,setPopupOpen]=useState(false)
   const [UserInfo, setUserInfo] = useState({
     name: "",
     lastName: "",
     Age: "",
     BloodType: "",
     LastDonation: "",
     City:"",
     Phone:"",
   });
   const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const handleChange = (field) => (e) => {
    setUserInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };
  return (
    <>
    <MainDiv>
      
    <ImageHolder src={donateBlood}/>
<StyledButton onClick={()=>setPopupOpen(true)}>
  Be a Hero
</StyledButton>

{
  isPopupOpen &&
<Popup
    content={
      
    <DonateInputs/>
      
    }
    onClose={togglePopup}
  />
}
    </MainDiv>
    </>
  )
}

export default Donate