import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    {
      background-color: white;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      position: fixed;
      left: 0;
      right: 0;
      top: -20px;
      transform: scale(0.5);
      z-index: 1;
      transition-duration: 0.5s;
      margin: 0 auto;
      max-width: 464px;
      padding: 5px;
    }
    &::-webkit-scrollbar {
      display: none;
  }  
  `
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
