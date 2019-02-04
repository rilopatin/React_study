import React, { Component } from 'react';
import gotService from '../../services/gotService'
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'

import styled from 'styled-components'

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    h4 {
    height: 50px;
    margin-bottom: 20px;
    text-align: center;
    }
    img {
    width: 100%;
    } 
`
const Term = styled.span`
    font-weight: bold;
`
const RandomBlockWrap = styled.div`
    margin-bottom: 40px;
`


export default class RandomChar extends Component {

    gotService = new gotService()

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar()
        //refresh data every 1,5 sec
        this.timerId = setInterval(this.updateChar, 1500)
    }

    componentWillUnmount () {
        clearInterval(this.timerId)
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
            errorCode: err.message
        })
    }

    updateChar = () => {
       const id = Math.floor(Math.random() * 140 + 25)
        //const id = 5000000000
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)

    }

    render() {

        const {char, loading, error, errorCode } = this.state

        const errorMessage = error ? <ErrorMessage code={errorCode}/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={char}/> : null

        return (

                <RandomBlock  className="rounded">
                    {errorMessage}
                    {spinner}
                    {content}
                </RandomBlock>
        )
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}
