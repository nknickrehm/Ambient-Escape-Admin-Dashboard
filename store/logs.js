export const state = () => ({
  groupLogs: {
    a: {
      progress: 70,
      log: [
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        }
      ],
      keysFound: [true]
    },
    d: {
      progress: 10,
      log: [
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        }
      ],
      keysFound: [true, false, false]
    },
    e: {
      progress: 30,
      log: [
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        }
      ],
      keysFound: [true, false, false, true]
    },
    f: {
      progress: 50,
      log: [
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id',
          timestamp: new Date()
        }
      ],
      keysFound: [false, false, false, false, false]
    }
  }
})

export const mutations = {
  /**
   * Init the groupLogs object. Requires hardcoded keysFound arrays
   */
  init (state) {
    Object.keys(state.groupLogs).forEach((log) => {
      log.progress = 0
      log.log = []
      log.keysFound.forEach(key => (key = !key))
    })
  },
  addToLog (state, { groupID, logEntry }) {
    state.groupLogs[groupID.toLowerCase()].log.push(logEntry)
    // compensate vue2 bug
    state.groupLogs[groupID.toLowerCase()].log.push(null)
    state.groupLogs[groupID.toLowerCase()].log.pop()
  },
  changeKeysFound (state, { groupID, index, value = true }) {
    state.groupLogs[groupID.toLowerCase()].keysFound[index] = value
    // compensate vue2 bug
    state.groupLogs[groupID.toLowerCase()].keysFound.push(null)
    state.groupLogs[groupID.toLowerCase()].keysFound.pop()
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
