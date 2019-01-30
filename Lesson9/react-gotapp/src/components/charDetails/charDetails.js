import React, {Component} from 'react';
import gotService from '../../services/gotService'
import Spinner from '../spinner'
import styled from 'styled-components'
import ErrorMessage from '../errorMessage'

const CharDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
    height: 50px;
    margin-bottom: 20px;
    text-align: center;
    }
`
export default class CharDetails extends Component {

    gotService = new gotService()

    state = {
        char: null,
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
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
       if(this.props.charId !== prevProps.charId) {
           this.updateChar()
       }
    }

    updateChar() {
        this.setState({loading: true})
        const {charId} = this.props
        if(!charId) {
            return
        }
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char, loading: false})
                console.log(this.state.loading)
            })
            .catch(this.onError)

        //to test error put this stuff
        //this.foo.bar = 0
    }

    render() {

        if(!this.state.char) {
            return <span className='select-error text-white'>Please select a character</span>
        }

        const {char, loading, error } = this.state

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={char}/> : null

        return (
            <CharDetailsBlock className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </CharDetailsBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture, id} = char
    return (
        <>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
        )
}