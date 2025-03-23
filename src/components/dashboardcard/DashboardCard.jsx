import React from 'react'
import { CardContainer, MainCard } from './DashboardCard.style'
import StyledButton from '../../elements/styledButton/StyledButton'

const DashboardCard = ({name,ph,bloodtype,dob,loc,ldb,diseases,request=false}) => {
  return (
    <CardContainer>

<MainCard>
<p> name : {name}</p> 
<p> phone : {ph} </p> 
<p> bloodtype : {bloodtype} </p> 
<p> dob : {dob} </p> 
<p> location : {loc} </p> 
<p> ldb : {ldb}</p> 
<p> diseases : {diseases}</p> 


{
    request &&
    <StyledButton title={"Approve"}/>
}
</MainCard>

    </CardContainer>

  )
}

export default DashboardCard