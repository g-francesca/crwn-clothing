import React from 'react'
import {
  StyledMenuItem,
  StyledContent,
  StyledTitle,
  StyledSubTitle,
  StyledBackground
} from './MenuItem.styled'

const MenuItem = ({ title, subTitle, imageSrc }) => (
  <StyledMenuItem>
    <StyledBackground imageSrc={imageSrc} />
    <StyledContent>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
    </StyledContent>
  </StyledMenuItem>
)

export default MenuItem