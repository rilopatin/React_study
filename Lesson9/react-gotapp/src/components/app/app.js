import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage'

export default class App extends Component {

    state = {
        showRandomChar: true,
        buttonText: 'HIDE',
        error: false
    }

    componentDidCatch() {
        console.log('error')
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
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <Button className="mt-3 mb-3" size="lg" block
                                    onClick={this.toggleRandomChar}>
                                {this.state.buttonText}</Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};

