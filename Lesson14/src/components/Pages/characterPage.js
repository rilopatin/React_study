import React, { Component } from 'react';
import ItemList from '../itemList/index';
import ItemDetails, {Field} from '../itemDetails/index';
import ErrorMessage from '../errorMessage/index'
import gotService from '../../services/gotService'
import RowBlock from '../rowBlock/index'

export default class CharacterPage extends Component {

    gotService = new gotService()

    state = {
        selectedItem: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render () {
        if(this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllCharacters}
            renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem}
                         getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}

