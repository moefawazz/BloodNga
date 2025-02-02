import React, { useState } from 'react'
import { ButtonHolder, MainInputs } from './donate.style'
import StyledInput from '../../elements/styledInput/StyledInput'
import Bloodtype from '../../components/bloodType/Bloodtype'
import { Label, LabelContainer } from '../../elements/styledInput/StyledInput.style'
import { FlexDiv } from '../../globalStyles'
import StyledButton from '../../elements/styledButton/StyledButton'

const DonateInputs = () => {
    const [selected, setSelected] = useState(null);
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      dob: '',
      location: '',
      diseases: '',
      ldb: ''
    });
  
    const handleInputChange = (field) => (e) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      };
  

    const submit=()=>{
        console.log(formData)
        console.log(selected)
    }
    return (
        <MainInputs>
        <StyledInput label={"Name + Last Name *"} type={"text"} onChange={handleInputChange("name")} name="name" value={formData.name} />
        <StyledInput label={"Phone Number *"} type={"text"}  onChange={handleInputChange("phone")} name="phone" value={formData.phone} />
            <LabelContainer>
              <Label>Blood Type *</Label>
              </LabelContainer>
              <FlexDiv>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
              <Bloodtype
                key={type}
                label={type}
                onClick={() => setSelected(type)}
                isSelected={selected === type}
              />
            ))}
              </FlexDiv>
        <StyledInput label={"Date Of Birth *"} type={"date"} onChange={handleInputChange("dob")} name="dob" value={formData.dob} />
        <StyledInput label={"Where do you live ?"} type={"text"} onChange={handleInputChange("location")} name="location" value={formData.location} />
        <StyledInput label={"Last Time you donated Blood *"} type={"date"} onChange={handleInputChange("ldb")} name="ldb" value={formData.ldb} />
        <StyledInput label={"Do you have any Diseases? if yes, please specify *"} type={"text"} onChange={handleInputChange("diseases")} name="diseases" value={formData.diseases} />
        <ButtonHolder>

        <StyledButton title={"Submit"} onClick={()=>submit()} />
        </ButtonHolder>
        </MainInputs>
    );
  };
export default DonateInputs