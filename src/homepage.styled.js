import styled from 'styled-components'

export const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`

export const StyledMenu = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
`

export const StyledMenuItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.border};

  &:first-child {
    margin-rigth: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`

export const StyledContent = styled.div`
  heigth: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledTitle = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: ${props => props.theme.colors.text};
`

export const StyledSubTitle = styled.div`
  font-weight: lighter;
  font-size: 16px;

`