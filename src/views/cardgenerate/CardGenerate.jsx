import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { MainDiv } from './CardGenerate.style';
import { ButtonHolder, UpperDesign } from '../request/Request.style';
import StyledInput from '../../elements/styledInput/StyledInput';
import StyledButton from '../../elements/styledButton/StyledButton';
const CardGenerate = () => {
  const [code, setCode] = useState("");

  const requestCard = () => {
    const doc = new jsPDF();
    doc.setFillColor(200, 0, 0); // Red color
    doc.rect(0, 10, 210, 20, 'F'); // X, Y, Width, Height
  
    // Set title text
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255); // White text
    doc.setFontSize(18);
    doc.text("Blood Donation Card", 70, 20);
  
   
  
    // Set text properties
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
  
    // Define user details, ensure all values are strings
    const userDetails = [
      ["Name:", "Mohamad Fawaz"],
      ["Age:", "24 years old"],
      ["Phone Number:", "123456789"],
      ["Blood Type:", "AB+"],
      ["Location:", "Chehim"],
    ];
  
    // Use autoTable for structured details
    doc.autoTable({
      startY: 90, // Position after the image
      head: [["Field", "Details"]], // Table header
      body: userDetails.map(([field, detail]) => [String(field), String(detail)]), // Ensure all values are strings
      theme: "grid",
      styles: {
        fontSize: 12,
        halign: "center",
      },
      headStyles: {
        fillColor: [200, 0, 0], 
        textColor: 255,
      },
      alternateRowStyles: { fillColor: [240, 240, 240] }, 
    });
  
    // Save the PDF
    doc.save("Blood_Donation_Card.pdf");
  };
  

  return (
    <>
      <UpperDesign />
      <MainDiv>
        <StyledInput
          label={"Enter the given code by email :"}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <ButtonHolder>
          <StyledButton title={"Request Card (PDF)"} onClick={requestCard} />
        </ButtonHolder>
      </MainDiv>
    </>
  );
};

export default CardGenerate;
