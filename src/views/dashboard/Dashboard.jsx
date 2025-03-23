import React, { useState } from 'react';
import { ItemHolder, MainDiv, RightSide, SearchInput } from './dashboard.style';
import DashboardSide from './dashboardside/DashboardSide';
import { FlexDiv } from '../../globalStyles';
import DashboardCard from '../../components/dashboardcard/DashboardCard';
import { CardContainer } from '../../components/dashboardcard/DashboardCard.style';
import Bloodtype from '../../components/bloodType/Bloodtype';

const users = [
  { name: "Mohamad Fawaz", ph: "81732292", bloodtype: "A+", diseases: "None", dob: "21/5/2001", ldb: "21/5/2024", loc: "Chehim" },
  { name: "Ali Hassan", ph: "71654321", bloodtype: "O-", diseases: "Diabetes", dob: "15/8/1995", ldb: "10/3/2024", loc: "Beirut" },
  { name: "Sara Ahmad", ph: "70112233", bloodtype: "B+", diseases: "None", dob: "5/12/1999", ldb: "1/7/2024", loc: "Saida" },
  { name: "Khaled Nasser", ph: "76881234", bloodtype: "AB+", diseases: "None", dob: "2/4/1990", ldb: "15/6/2024", loc: "Tripoli" }
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState(null);

  // Filter users based on both search term and blood type
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodType = selectedBloodType ? user.bloodtype === selectedBloodType : true;
    return matchesSearch && matchesBloodType;
  });

  return (
    <>
     
      <RightSide>
        {/* Search by Name */}
        <SearchInput 
          type="text" 
          placeholder="Search by name..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />

        {/* Blood Type Selection */}
        <FlexDiv>
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
            <Bloodtype
              key={type}
              label={type}
              onClick={() => setSelectedBloodType(type === selectedBloodType ? null : type)}
              isSelected={selectedBloodType === type}
            />
          ))}
        </FlexDiv>

        {/* Dashboard Cards */}
        <CardContainer>
          {filteredUsers.map((user, index) => (
            <DashboardCard key={index} {...user} />
          ))}
        </CardContainer>
      </RightSide>
    </>
  );
};

export default Dashboard;
