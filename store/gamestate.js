import GameState from '../helpers/gamestate'

export const state = () => ({
  currentState: GameState.setup
})

export const mutations = {
  change (state, newGameState) {
    state.currentState = newGameState
  }
}

export const getters = {
  getState (state) {
    return state.currentState
  }
}
