const Axios = require('axios')
const BACKENDBASEURL = 'http://127.0.0.1:8080'
const GAMESTATES = {
  NOT_STARTED: 'NOT STARTED',
  STARTED: 'STARTED'
}

const axios = Axios.create({
  baseURL: BACKENDBASEURL,
  timeout: 2000,
  headers: { 'Access-Control-Allow-Origin': '*' }
})

export default {
  async addPlayers (players) {
    let _success = true
    let _msg = ''
    for (let i = 0; i < players.length; i++) {
      const { isSuccess, msg } = await this.addPlayer(players[i])
      _success = isSuccess && _success
      _msg = `${_msg}\n${msg}`
    }

    return { isSuccess: _success, msg: _msg }
  },

  async addPlayer (player) {
    try {
      await axios.post('/players', player)
      return { isSuccess: true, msg: '' }
    } catch (e) {
      console.error(e)
      return { isSuccess: false, msg: e }
    }
  },

  async getPlayers (gameid) {
    try {
      const res = await axios.get('/players')
      const { data: _players } = res
      // eslint-disable-next-line
      const players = _players.filter(player => player.gameid == gameid)
      return players
    } catch (e) {
      console.error(e)
      return []
    }
  },

  async getGame () {
    const _games = await this.getGames()
    if (_games.isSuccess) {
      const { games } = _games
      const activeGame = games.find(game => game.status === GAMESTATES.STARTED)
      if (activeGame) {
        return { running: true, gameid: activeGame.gameid }
      } else {
        const preparedGame = games.find(game => game.status === GAMESTATES.NOT_STARTED)
        if (preparedGame) {
          return { running: false, gameid: preparedGame.gameid }
        } else {
          await this.createGame()
          return this.getGame()
        }
      }
    } else {
      const { gameid } = await this.createGame()
      if (gameid) {
        return { running: false, gameid }
      } else {
        throw new Error('There seems to be something wrong with the Backend!')
      }
    }
  },

  async getGames () {
    try {
      const res = await axios.get('/games')
      const { data: games } = res
      return { isSuccess: true, games }
    } catch (e) {
      console.error(e)
      return { isSuccess: false, msg: e }
    }
  },

  async createGame () {
    try {
      const res = await axios.post('/games', {})
      const { data } = res
      return { gameid: data.id }
    } catch (e) {
      console.error(e)
    }
  },

  async startGame (gameid) {
    try {
      await axios.patch(`/games/${gameid}/Status`, { status: GAMESTATES.STARTED })
    } catch (e) {
      console.error(e)
    }
  },

  async createStoryline (gameid) {
    const storyline = Math.floor(Math.random() * 4)
    try {
      await axios.post('/storylines', { gameid, storyline })
    } catch (e) {
      console.error(e)
    }
  },

  async getStoryline (gameid) {
    const _storylines = await this.getStorylines()
    if (_storylines.isSuccess) {
      const { storylines } = _storylines
      const currentStoryline = storylines.find(storyline => parseInt(storyline.gameid) === gameid)
      if (currentStoryline) {
        return currentStoryline
      } else {
        await this.createStoryline(gameid)
        return this.getStoryline(gameid)
      }
    } else {
      await this.createStoryline(gameid)
      return this.getStoryline(gameid)
    }
  },

  async getStorylines () {
    try {
      const res = await axios.get('/storylines')
      const { data: storylines } = res
      return { isSuccess: true, storylines }
    } catch (e) {
      console.error(e)
      return { isSuccess: false, msg: e }
    }
  }
}
