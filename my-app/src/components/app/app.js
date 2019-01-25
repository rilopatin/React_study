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
                {label: 'Going to learn React', important: true, like: false, id: idGenerator()},
                {label: 'Hi man', important: false, like: false, id: idGenerator()},
                {label: 'Good', important: false, like: false, id: idGenerator()}
            ],
            term: '',
            filter: 'all'
        }
        //bind method to object
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggle = this.onToggle.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)
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

//onAdd()
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

    //changes important and like
    onToggle(id, attr) {
        console.error(id + " - " + attr)
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id)

            const old = data[index]
            //to rewrite like(change true/false)
            const newItem = {...old, [attr]: !old[attr]}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if(term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost(items, filter) {
        if(filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

render () {
        const {data, term, filter} = this.state
        const liked = data.filter(item => item.like).length
        const allPosts = data.length

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

    return (
        <StyledAppBlock>
            <AppHeader
                liked={liked}
                allPosts={allPosts}/>
            <div className="search-panel d-flex">
                <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                    />
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
            </div>
            <PostList posts={visiblePosts}
                      onDelete={this.deleteItem}
                      onToggle={this.onToggle}/>
            <PostAddForm
                onAdd={this.addItem}/>
        </StyledAppBlock>
    )
}

}

