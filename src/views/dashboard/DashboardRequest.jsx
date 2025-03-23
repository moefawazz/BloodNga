import React from 'react'
import { RightSide } from './dashboard.style'
import { CardContainer } from '../../components/dashboardcard/DashboardCard.style'
import DashboardCard from '../../components/dashboardcard/DashboardCard'

const DashboardRequest = () => {
    const users = [
        { name: "Mohamad Fawaz", ph: "81732292", bloodtype: "A+", diseases: "None", dob: "21/5/2001", ldb: "21/5/2024", loc: "Chehim" },
        { name: "Ali Hassan", ph: "71654321", bloodtype: "O-", diseases: "Diabetes", dob: "15/8/1995", ldb: "10/3/2024", loc: "Beirut" },
        { name: "Sara Ahmad", ph: "70112233", bloodtype: "B+", diseases: "None", dob: "5/12/1999", ldb: "1/7/2024", loc: "Saida" },
        { name: "Khaled Nasser", ph: "76881234", bloodtype: "AB+", diseases: "None", dob: "2/4/1990", ldb: "15/6/2024", loc: "Tripoli" }
      ];
  return (
 <RightSide>
 <CardContainer>
          {users.map((user, index) => (
            <DashboardCard key={index} {...user} request={true}/>
          ))}
        </CardContainer>

 </RightSide>
  )
}

export default DashboardRequest