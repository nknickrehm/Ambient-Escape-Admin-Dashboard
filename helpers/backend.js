const Axios = require('axios')
const BACKENDBASEURL = 'http://localhost:8080'

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
  }
}
