import React from 'react'

import './app-header.css'
import styled from 'styled-components'

//styled-components creation
const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
     font-size: 26px;
     color: ${props => props.colored ? 'red' : 'black'}
     :hover {
        color: blue;
      }
      h2 {
        font-size: 1.2 rem;
        color: grey;
      }
`

//<Header as='a' - to use Header as a link
//////////////////////////////////////////

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header as='a' colored="false">
            <h1>Regina Lopatin</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader