import React from 'react'
import { Container } from './NotFound.style'
import { PiSmileySadLight } from 'react-icons/pi'
import { BoldTypography, RegularTypography } from '../../elements/typography/Typography'
import { useLang } from '../../contexts/LangContext'

const NotFound = () => {
    const { translations } = useLang()
  return (
    <Container>
        <PiSmileySadLight size={250}/>
        <BoldTypography text={translations.PageNotFound} fontSize='30px'/>
        <RegularTypography text={translations.CantFindPage}/>
    </Container>
  )
}

export default NotFound