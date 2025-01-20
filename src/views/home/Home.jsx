import React, { useEffect, useState } from 'react';
import { ContentContainer, GridContainer, LayoutContainer, WelcomeContainer, WelcomeText } from './Home.style';
import { cardsData } from './Home.data';
import Card from '../../components/card/Card';
import { useLang } from '../../contexts/LangContext';
import { useTheme } from '../../contexts/ThemeContext';
import { fetchCollectionData } from '../../functions/firebaseFunctions';
import { UserAuth } from '../../contexts/authContext';

const Home = () => {
  const { translations, language } = useLang();
  const { theme } = useTheme();
  const { user } = UserAuth();

  return (
    <LayoutContainer language={language}>
      <ContentContainer>
        <WelcomeContainer>
          <WelcomeText color={theme.textPrimary}>
            {translations.welcome} <span style={{ color: '#1980e6', textTransform: 'capitalize' }}>{user.email ? user.email.split('@')[0] : ''}</span> {translations.to} <span style={{ color: '#1980e6' }}>ManageMate</span>
          </WelcomeText>
        </WelcomeContainer>

        <GridContainer>
          {cardsData.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={translations[item.title]}
              description={translations[item.description]}
              path={item.path}
            />
          ))}
        </GridContainer>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Home;
