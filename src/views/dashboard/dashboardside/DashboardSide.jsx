import React from 'react'
import { ItemHolder, MainDiv } from '../dashboard.style'
import { useNavigate } from 'react-router-dom'

const DashboardSide = () => {
  const navigate = useNavigate(); // Using the hook

  return (
    <MainDiv>
      <ItemHolder onClick={() => navigate("/dashboard")}>
        Blood Request
      </ItemHolder>
      <ItemHolder onClick={() => navigate("/dashboard/approval")}>
        Blood donating Approval
      </ItemHolder>
      <ItemHolder onClick={() => navigate("/dashboard/addUser")}>
        Add User
      </ItemHolder>
    </MainDiv>
  )
}

export default DashboardSide
