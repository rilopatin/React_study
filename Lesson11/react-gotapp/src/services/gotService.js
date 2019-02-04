const fetch = require('isomorphic-fetch')

export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(res.status)
        }
        return await res.json()
    }
     getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10')
        return res.map(this._transformCharacter)
    }
    getCharacter = async (id) =>  {
        const character = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(character)

    }
    getAllBooks = async () => {
        const res = await this.getResource(`/books/`)
        return res.map(this._transformBook)
    }
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`)
        return this._transformBook(book)
    }
    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`)
        return res.map(this._transformHouse)
    }
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`)
        return this._transformHouse(house)
    }

    _transformCharacter(char){
        let urlId = char.url.substring(char.url.lastIndexOf('/') + 1)
        return {
            name: (char.name.length !== 0) ? char.name : 'unknown',
            gender: (char.gender.length !== 0) ? char.gender : 'unknown',
            born: (char.born.length !== 0) ? char.born : 'unknown',
            died: (char.died.length !== 0) ? char.died : 'unknown',
            culture: (char.culture.length !== 0) ? char.culture : 'unknown',
            id: urlId
        }
    }
    _transformHouse(house) {
        let urlId = house.url.substring(house.url.lastIndexOf('/') + 1)
        return{
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,
            id: urlId
        }
    }
    _transformBook(book) {
        let urlId = book.url.substring(book.url.lastIndexOf('/') + 1)
        return {
           name: book.name,
           numberOfPages: book.numberOfPages,
           publiser: book.publiser,
           released: book.released,
            id: urlId
        }
    }
}







