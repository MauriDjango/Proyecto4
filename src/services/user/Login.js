

class Login {
  __db

  constructor(db) {
    this.__db = db;
  }

  async login(email, password) {
    try {
      const user = await this.__db.getById(email)
      if (user.password === password) {
        this.loadUser(user)
      }
    } catch (err) {
      console.error(err)
    }
  }

  loadUser(user) {

  }
}