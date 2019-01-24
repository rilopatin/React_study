import React, { Component } from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import idGenerator from 'react-id-generator';

import './app.css'
import styled from 'styled-components'

//styled-component creation
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
const StyledAppBlock = styled(AppBlock)`
    border: 1px solid black;
    padding: 10px;
`
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                5,
                {label: 'Going to learn React', important: true, htmlId: idGenerator()},
                {label: 'Going to learn React1', important: false, htmlId: idGenerator()},
                {label: 'Going to learn React2', important: false, htmlId: idGenerator()}
            ]
        }
        //bind method to object
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        //this.maxId = 4

}

deleteItem (id) {
    this.setState(({data}) => {
        const index = data.findIndex((elem) => elem.id === id)
        const before = data.slice(0, index)
        const after = data.slice(index + 1)
        const newArr = [...before, ...after]

        return {
            data: newArr
        }
    })
}
addItem (body) {
    const newItem = {
        label: body,
        important: false,
        id: idGenerator()
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem]
        return {
            data: newArr
            }
        })
    }

render () {
    return (
        <StyledAppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={this.state.data}
                      onDelete={this.deleteItem}/>
            <PostAddForm
                onAdd={this.addItem}/>
        </StyledAppBlock>
    )
}

}

