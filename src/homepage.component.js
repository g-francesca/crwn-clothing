import React from 'react';
import {
  StyledHomepage,
  StyledMenu,
  StyledMenuItem,
  StyledContent,
  StyledTitle,
  StyledSubTitle
} from './homepage.styled'


const HomePage = () => (
  <StyledHomepage>
    <StyledMenu>
      <StyledMenuItem>
        <StyledContent>
          <StyledTitle>My title</StyledTitle>
          <StyledSubTitle>My subtitle</StyledSubTitle>
        </StyledContent>
      </StyledMenuItem>
    </StyledMenu>
  </StyledHomepage>
)

export default HomePage