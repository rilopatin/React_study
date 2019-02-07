import React from 'react'
import BookPage from './bookPage'
import {shallow} from 'enzyme'


    describe('Testing <BookPage/>', () => {
        const books = shallow(<BookPage/>)
        it('BookPage has been rendered correctly', () => {
            expect(books).toMatchSnapshot()
        });

        it('BookPage state "error" is false', () => {
            expect(books.state.error).toBeFalsy()
        });
    })




