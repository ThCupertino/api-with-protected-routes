const users = [
  { id: '1',name: 'Thiago', email: 'rcupertino77@gmail.com', password: '222', role: 'admin' }
]

module.exports = {
  findAllUsers() {
    return users
  },

  findById(id) {
    return users.find(user => user.id === id)
  },

  findByEmail(email) {
    return users.find(user => user.email === email)
  },

  registerUser (name, email, password) {
    const userAlreadyExists = users.find(user => user.email === email)
    if (userAlreadyExists) return null

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      role: 'standard'
    }

    users.push(newUser)
    return newUser
  },

  createUser (name, email, password, role) {
    const userAlreadyExists = users.find(user => user.email === email)
    if (userAlreadyExists) return null

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      role
    }

    users.push(newUser)
    return newUser
  },

  deleteUser(id) {
    const userId = users.findIndex(user => user.id === id)
    if(userId === -1) return null

    const [deletedUser] = users.splice(userId, 1)

    return deletedUser
  }
}