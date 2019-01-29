import React, {Component} from 'react';
import { Button } from 'reactstrap'
import gotService from '../../services/gotService'
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'

import styled from 'styled-components'

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    h4 {
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
const Clear = styled.div`
    clear: both;
`

export default class RandomChar extends Component {

    constructor() {
        super()
        this.updateChar()
        this.onToggleRandomChar()
    }

    gotService = new gotService()

    state = {
        char: {},
        loading: true,
        error: false,
        buttonText: 'HIDE',
        isHidden: false
    }

    onToggleRandomChar = () => {
        this.setState ({
            isHidden: !this.state.isHidden,
            buttonText: this.state.buttonText === 'HIDE' ? 'SHOW' : 'HIDE'

        })

    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 25)
        //const id = 5000000000
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {

        const {char, loading, error, isHidden, buttonText } = this.state

        let divStyle = {visibility: 'initial'}
        if(isHidden) {
            divStyle = {visibility: 'hidden'}
        }

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={char}/> : null

        return (
            <RandomBlockWrap>
                <RandomBlock  className="rounded"
                    style={divStyle}>
                    {errorMessage}
                    {spinner}
                    {content}
                </RandomBlock>
                <Button className="float-right" size="lg" block
                    onClick={this.onToggleRandomChar}>
                    {buttonText}</Button>
                <Clear></Clear>
            </RandomBlockWrap>
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
