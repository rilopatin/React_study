const fetch = require('isomorphic-fetch')

export default class GotService {
    constructor() {
        this._apiBase = ''
    }
    async getResource(url) {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json()
    }
    async getAllCharacters() {
        const res = await this.getResource('https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10')
        return res.map(this._transformCharacter)
    }
    async getCharacter(id) {
        const character = await this.getResource(`https://www.anapioficeandfire.com/api/characters/${id}`)
        return this._transformCharacter(character)

    }
    getAllBooks(){
        return this.getResource(`/books/`)
    }
    getBook(id) {
        return this.getResource(`/books/${id}/`)
    }
    _transformCharacter(char){
        let urlId = char.url.substring(char.url.lastIndexOf('/') + 1)
        console.log(urlId)
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
        return{
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook(book) {
        return {
           name: book.name,
           numberOfPages: book.numberOfPages,
           publiser: book.publiser,
           released: book.released
        }
    }
}







