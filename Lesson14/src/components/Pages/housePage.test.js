import React from 'react'
import HousePage from './housePage'
import {shallow} from 'enzyme'


describe('Testing <HousePage/>', () => {
    const house = shallow(<HousePage/>)
    it('HousePage has been rendered correctly', () => {
        expect(house).toMatchSnapshot()
    });

    it('HousePage state "error" is false', () => {
        expect(house.state.error).toBeFalsy()
    });
    it('HousePage state "selectedItem" is empty object', () => {
        expect(house.state().selectedItem).toBeObject()
    });
})