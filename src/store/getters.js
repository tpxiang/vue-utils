const getters = {
  userRole: state => state.user && state.user.user.userType
}

export default getters
