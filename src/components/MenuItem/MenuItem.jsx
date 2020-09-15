import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  StyledMenuItem,
  StyledContent,
  StyledTitle,
  StyledSubTitle,
  StyledBackground
} from './MenuItem.styled'

const MenuItem = ({ title, subTitle, imageSrc, history, match, linkUrl }) => (
  <StyledMenuItem onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <StyledBackground imageSrc={imageSrc} />
    <StyledContent>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
    </StyledContent>
  </StyledMenuItem>
)

export default withRouter(MenuItem)