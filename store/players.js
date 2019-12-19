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

    const sumDevices = players.reduce((acc, player) => acc + player.device, 0)
    if (sumDevices !== 2) { valid = false } // if all devices are distributed, the players device attributes sum up to 2

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
