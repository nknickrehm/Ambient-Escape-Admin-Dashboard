export const state = () => ({
  players: Array(4).fill({
    name: '',
    email: '',
    device: -1,
    accepted: false
  })
})

export const mutations = {
  update (state, players) {
    state.players = players
  },
  accept (state, i) {
    state.players[i].accepted = true
  }
}

export const getters = {
  getPlayers (state) {
    return state.players
  }
}
