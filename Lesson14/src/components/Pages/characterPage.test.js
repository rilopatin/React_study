import React from 'react'
import CharacterPage from './characterPage'
import {shallow} from 'enzyme'


describe('Testing <CharacterPage/>', () => {
    const char = shallow(<CharacterPage/>)
    it('CharacterPage has been rendered correctly', () => {
        expect(char).toMatchSnapshot()
    });

    it('CharacterPage state "error" is false', () => {
        expect(char.state.error).toBeFalsy()
    });
})