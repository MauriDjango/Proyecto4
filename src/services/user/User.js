import resolve from 'resolve'

class UserManager {
  __db

  constructor(db) {
    this.__db = db;
  }

  async createUser (registration) {
    try {
      await this.__db.getById(registration.email);
      return { success: false, data: registration }
    } catch (error) {
      console.error("Error fetching client:", error);
      this.__db.create(registration);
      return { success: true, data: registration}
    }
  }
}