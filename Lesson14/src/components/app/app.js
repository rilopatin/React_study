import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import {CharacterPage, BookPage, HousePage, BooksItem, HomePage, WelcomePage} from '../Pages'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.css'

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Route path='/' exact component={WelcomePage}/>
                        <Route path='/game' exact component={HomePage}/>
                        <Route path='/characters' exact component={CharacterPage}/>
                        <Route path='/houses' exact component={HousePage}/>
                        <Route path='/books' exact component={BookPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params
                                return <BooksItem bookId={id}/>
                            }
                        }/>
                    </Container>
                </div>
            </Router>
        );
    }
};

