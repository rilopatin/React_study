import React from 'react'
import Header from './header'
import {shallow} from 'enzyme'


describe('Testing <Header/>', () => {
    it('Header has been rendered correctly', () => {
        const header = shallow(<Header/>)
        expect(header).toMatchSnapshot();
    })
})