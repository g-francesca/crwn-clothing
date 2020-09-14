import styled from 'styled-components/macro'

export const StyledMenuItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.border};
  margin-bottom: 7.5px;
  margin-right: 7.5px;
  position: relative;
  overflow: hidden;
`

export const StyledBackground = styled.div`
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 1.5s;
  transform: scale(1);

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`

export const StyledContent = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  opacity: 0.7;
  pointer-events: none;
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