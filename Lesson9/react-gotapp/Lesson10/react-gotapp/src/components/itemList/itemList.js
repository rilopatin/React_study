import React, {Component} from 'react';
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'

import styled from 'styled-components'

const ItemListBlock = styled.ul`
    cursor: pointer;
`

export default class ItemList extends Component {

    state = {
        itemList: null,
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
        const {getData} = this.props
        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                    loading: false
                })
            })
            .catch(this.onError)
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item
            const label = this.props.renderItem(item)
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state
        const {loading, error } = this.state

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? this.renderItems(itemList) : null

        return (
            <ItemListBlock className="item-list list-group">
                {errorMessage}
                {spinner}
                {content}
            </ItemListBlock>
        );
    }
}