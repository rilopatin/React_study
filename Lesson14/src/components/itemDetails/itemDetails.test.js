import React from 'react'
import ItemDetails from './itemDetails'
import {shallow} from 'enzyme'
import ErrorMessage from '../errorMessage/errorMessage'

describe('Testing <ItemDetails/>', () => {
    const item = shallow(<ItemDetails/>)
    describe('Testing <ItemDetails/>', () => {
        it('ItemDetails has been rendered correctly', () => {
            expect(item).toMatchSnapshot()
        });
        it('ItemDetails state "item" is empty object', () => {
            expect(item.state().item).toBeObject()
        });
        it('ItemDetails state "loading" is true', () => {
            expect(item.state().loading).toBeTruthy()
        });
        it('ItemDetails state "error" is false', () => {
            expect(item.state().error).toBeFalsy()
        });
    })
    describe('Handlers tests', () => {
        it('testing onError', () => {
            item.instance().onError();
            expect(item.state().loading).toBeFalsy();
            expect(item.state().error).toBeTruthy()
        });
        it('testing updateItem', () => {
            item.instance().updateItem()
            expect(item.state().loading).toBeTruthy()
        })
    })
})


