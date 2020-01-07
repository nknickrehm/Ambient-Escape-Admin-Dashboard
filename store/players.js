const MIN_PLAYER_COUNT = 4

const playerTemplate = {
  name: '',
  mail: '',
  device: -1,
  accepted: false
}

export const state = () => ({
  valid: false,
  players: Array(4).fill(JSON.parse(JSON.stringify(playerTemplate)))
})

export const mutations = {
  update (state, players) {
    const missingPlayers = MIN_PLAYER_COUNT - players.length
    if (missingPlayers > 0) {
      const emptyPlayers = Array(missingPlayers).fill(JSON.parse(JSON.stringify(playerTemplate)))
      players = Array.prototype.concat(players, emptyPlayers)
    }
    state.players = players

    let valid = true
    players.forEach((player) => {
      if (player.name.length < 1 || player.mail.length < 1 || !player.accepted) { valid = false }
    })

    const playersWithoutDevice = players.filter(player => player.device === -1)
    if (playersWithoutDevice.length !== players.length - 3) {
      valid = false
    }

    state.valid = valid
  },
  accept (state, i) {
    state.players[i].accepted = true
  }
}

export const getters = {
  getPlayers (state) {
    return state.players
  },
  getValid (state) {
    return state.valid
  }
}
