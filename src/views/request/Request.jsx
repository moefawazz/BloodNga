import React, { useState } from 'react'
import { ButtonHolder, MainDiv, UpperDesign, UpperText } from './Request.style'
import requestBlood from "../../../src/assests/request1.jpg"
import RequestDiv from '../../components/requestDivs/RequestDiv'
import { BiAlarmAdd } from "react-icons/bi";
import StyledButton from '../../elements/styledButton/StyledButton';
import { MdReceipt } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Popup from '../../elements/popUp/PopUp';
import RequestInputs from './RequestInputs';
const Request = () => {
 const[isPopupOpen,setPopupOpen]=useState(false)
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const requestBlood=()=>{
    setPopupOpen(true);
  }
  return (
    <>
    <UpperDesign/>
<UpperText>
  Request Blood using Drop Network
</UpperText>
    <MainDiv>
<RequestDiv label={"We are Available 24/7"}  minilabel={"feel free to contact us at any time" } svg={<BiAlarmAdd />}/>
<RequestDiv label={"Please make sure all your information are correct"}  minilabel={"All interactions are serious and well coordinated" } svg={<MdReceipt />}/>
<RequestDiv label={"A team of professionals is ready to assist you"}  minilabel={"Trained individuals and volunteers eager to provide help alwasy ready" } svg={<AiOutlineTeam />}/>
<RequestDiv label={"In emergencies call the emergency number "}  minilabel={"Don't hesitate to call us on emergencies" } svg={<FiPhoneCall />}/>
      
    </MainDiv>
    <ButtonHolder>

<StyledButton onClick={requestBlood} title={"Request Blood"}/>
    </ButtonHolder>
    {
  isPopupOpen &&
<Popup
    content={
      
    <RequestInputs/>      
    }
    onClose={togglePopup}
  />
}
    </>
  )
}

export default Request