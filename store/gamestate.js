import GameState from '../helpers/gamestate'

export const state = () => ({
  currentState: GameState.setup
})

export const mutations = {
  change (state, newGameState) {
    state.currentState = newGameState
  }
}
