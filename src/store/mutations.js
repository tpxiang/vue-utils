import * as MutationTypes from './mutationTypes'

const mutations = {
  [MutationTypes.SET_USER]: (state, payload) => {
    state.user = payload
  }
}

export default mutations
