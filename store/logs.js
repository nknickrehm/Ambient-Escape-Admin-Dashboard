// TODO: Threshoulds from group e and f are missing
export const state = () => ({
  groupLogs: {
    a: {
      progress: 0,
      log: [],
      threshholdArray: [33, 66, 100]
    },
    d: {
      progress: 0,
      log: [],
      threshholdArray: [33, 66, 100]
    },
    e: {
      progress: 0,
      log: [],
      threshholdArray: [100]
    },
    f: {
      progress: 0,
      log: [],
      threshholdArray: [100]
    }
  }
})

export const mutations = {
  /**
   * Init the groupLogs object. Requires hardcoded threshholdArray arrays
   */
  init (state) {
    Object.keys(state.groupLogs).forEach((log) => {
      log.progress = 0
      log.log = []
      log.threshholdArray.forEach(key => (key = !key))
    })
  },
  addToLog (state, { groupID, logEntry }) {
    state.groupLogs[groupID.toLowerCase()].log.push(logEntry)
    // compensate vue2 bug
    state.groupLogs[groupID.toLowerCase()].log.push(null)
    state.groupLogs[groupID.toLowerCase()].log.pop()
  },
  changethreshholdArray (state, { groupID, index, value = true }) {
    state.groupLogs[groupID.toLowerCase()].threshholdArray[index] = value
    // compensate vue2 bug
    state.groupLogs[groupID.toLowerCase()].threshholdArray.push(null)
    state.groupLogs[groupID.toLowerCase()].threshholdArray.pop()
  },
  changeProgress (state, { groupID, value }) {
    state.groupLogs[groupID.toLowerCase()].progress = value
  },
  updateProgress (state, { name, progress }) {
    state.groupLogs[name.toLowerCase()].progress = parseInt(progress)
  }
}

export const getters = {
  getGlobalProgress (state) {
    return (
      (state.groupLogs.a.progress +
        state.groupLogs.d.progress +
        state.groupLogs.e.progress +
        state.groupLogs.f.progress) /
      4
    )
  }
}
