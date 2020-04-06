export const state = () => ({
  valid: false,
  todos: [
    {
      label: 'Blumen gegossen',
      status: false
    },
    {
      label: 'Hund gefüttert',
      status: false
    },
    {
      label: 'Fische gefüttert',
      status: false
    },
    {
      label: 'Klo geputzt',
      status: false
    }
  ]
})

export const mutations = {
  update (state, todos) {
    state.todos = todos

    let valid = true
    todos.forEach(todo => (valid = todo.status && valid))
    state.valid = valid
  }
}

export const getters = {
  getTodos (state) {
    return state.todos
  },
  getValid (state) {
    return state.valid
  }
}
