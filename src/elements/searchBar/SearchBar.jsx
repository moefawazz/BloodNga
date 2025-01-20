import React from 'react';
import { useLang } from '../../contexts/LangContext'
import { SearchContainer, SearchIcon, SearchInput } from './SearchBar.style';
import { useTheme } from '../../contexts/ThemeContext';

const SearchBar = ({onChange, value}) => {
    const { translations } = useLang()
    const { theme } = useTheme()
  return (
    <SearchContainer theme={theme}>
      <SearchIcon theme={theme}/>
      <SearchInput type="text" placeholder={translations.SearchPlaceholder} onChange={onChange} value={value} theme={theme}/>
    </SearchContainer>
  );
};

export default SearchBar;
