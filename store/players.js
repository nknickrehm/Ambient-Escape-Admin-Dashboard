export const state = () => ({
  valid: false,
  players: Array(4).fill({
    name: '',
    mail: '',
    device: -1,
    accepted: false
  })
})

export const mutations = {
  update (state, players) {
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
