import React, {Component} from 'react';
import Spinner from '../spinner'
import styled from 'styled-components'
import ErrorMessage from '../errorMessage'

const ItemDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
    height: 50px;
    margin-bottom: 20px;
    text-align: center;
    }
`

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {

    state = {
        item: null,
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
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
       if(this.props.itemId !== prevProps.itemId) {
           this.updateItem()
       }
    }

    updateItem() {
        this.setState({loading: true})
        const {itemId} = this.props
        if(!itemId) {
            return
        }
        const {getData} = this.props
        getData(itemId)
            .then((item) => {
                this.setState({item, loading: false})
            })
            .catch(this.onError)

        //to test error put this stuff
        //this.foo.bar = 0
    }

    render() {

        if(!this.state.item) {
            return <span className='select-error text-white'>Please select an item</span>
        }

        const {loading, error } = this.state
        const {item} = this.state
        const {name} = item

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </> : null

        return (
            <ItemDetailsBlock className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </ItemDetailsBlock>
        );
    }
}


