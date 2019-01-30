import React, {Component} from 'react';
//import './itemList.css';
import gotService from '../../services/gotService'
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'

import styled from 'styled-components'

const ItemListBlock = styled.ul`
    cursor: pointer;
`

export default class ItemList extends Component {

    gotService = new gotService()

    state = {
        charList: null,
        loading: true,
        error: false
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
        this.setState({loading: true})
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList,
                    loading: false
                })
            })
            .catch(this.onError)
    }

    renderItems(arr) {
        return arr.map((item) => {
            console.log(`id: ${item.id}`)
            return (
                <li
                    key={item.id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(item.id)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {

        const {charList} = this.state
        const {loading, error } = this.state

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? this.renderItems(charList) : null

        return (
            <ItemListBlock className="item-list list-group">
                {errorMessage}
                {spinner}
                {content}
            </ItemListBlock>
        );
    }
}