import React, { Component } from 'react';
import {Col, Row, Button} from 'reactstrap';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage'
import gotService from '../../services/gotService'
export default class HomePage extends Component {

    gotService = new gotService()

    state = {
        showRandomChar: true,
        buttonText: 'HIDE',
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar,
                buttonText: this.state.buttonText === 'HIDE' ? 'SHOW' : 'HIDE'
            }
        })
    }
    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null
        
        if(this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <Button className="mt-3 mb-3" size="lg" block
                                        onClick={this.toggleRandomChar}>
                                    {this.state.buttonText}</Button>
                            </Col>
                        </Row>         
            </>
        )
    }
}