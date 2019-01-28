const fetch = require('isomorphic-fetch')

class GotService {
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
    getAllCharacters() {
        return this.getResource('https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10')
    }
    getCharacter(id) {
        return this.getResource(`https://www.anapioficeandfire.com/api/characters/${id}`)
    }

}

const got = new GotService()

got.getAllCharacters()
    .then(res => {
        res.forEach(item => console.log(item.name))
    })

got.getCharacter(130)
    .then(res => console.log(res))