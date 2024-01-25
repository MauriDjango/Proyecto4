import { idbManager } from './IndexedDatabaseManager.js';


export class ObjectStore {
    _objectStoreName;
    _idbManager;

    constructor(idbManager, objectStoreName) {
        this._idbManager = idbManager;
        this._objectStoreName = objectStoreName;

        // You can use a separate method to create the object store when needed
        this.initializeObjectStore()
            .then(value => console.log(value))
            .catch(value => console.log(value));
    }

    // Initializes the object store if it doesn't exist
    async initializeObjectStore() {
        return new Promise(async (resolve, reject) => {
            console.log("Initializing object store:", this._objectStoreName);
            const db = await this._idbManager.openDB();
            console.log("Active database:", db, "Object store names:", db.objectStoreNames);
            if (!db.objectStoreNames.contains(this._objectStoreName)) {
                const store = db.createObjectStore(
                  this._objectStoreName,
                  { keyPath: "email" }
                );

                // Create indexes here if needed
                store.createIndex("firstName", "firstName", { unique: false });
                store.createIndex("lastName", "lastName", { unique: false})
                store.createIndex("email", "email", { unique: true });
                store.createIndex("phone", "phone", { unique: false });
                store.createIndex("username", "username", { unique: false });
                store.createIndex("dob", "dob", { unique: false });
                store.createIndex("password", "password", { unique: false});

                resolve("Object store '" + this._objectStoreName + "' created");
            } else {
                reject("Object store '" + this._objectStoreName + "' already exists");
            }
            this._idbManager.closeDB(db);
        })
    }

    // Adds a user to the object store
    async create(user) {
        const db = await this._idbManager.openDB();
        const transaction = db.transaction([this._objectStoreName], "readwrite");
        const objectStore = transaction.objectStore(this._objectStoreName);
        const result = objectStore.add(user);

        result.onsuccess = (event) => {
            console.log("User added successfully");
            this._idbManager.closeDB(db);
        };
        result.onerror = (event) => {
            console.log("Error adding user:", event.error);
            this._idbManager.closeDB(db);
        };
    }

    // Retrieves a user by their email
    async getById(userEmail) {
        const db = await this._idbManager.openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([this._objectStoreName], "readwrite");
            const objectStore = transaction.objectStore(this._objectStoreName);
            const result = objectStore.get(userEmail);

            result.onsuccess = (event) => {
                console.log("User fetched successfully:", event.target.result);
                this._idbManager.closeDB(db);
                resolve(event.target.result);
            };
            result.onerror = (event) => {
                console.log("User not found:", event.error);
                reject(event.error);
                this._idbManager.closeDB(db);
            };
        });
    }

    // Removes a user by their email
    async delete(userEmail) {
        const db = await this._idbManager.openDB();
        const transaction = db.transaction([this._objectStoreName], "readwrite");
        const objectStore = transaction.objectStore(this._objectStoreName);
        const result = objectStore.delete(userEmail);

        result.onsuccess = (event) => {
            console.log("User deleted successfully");
            this._idbManager.closeDB(db);
        };
        result.onerror = (event) => {
            console.log("Error removing the user:", event.error);
            this._idbManager.closeDB(db);
        };
    }

    // Edits an existing user's data
    async update(user) {
        const db = await this._idbManager.openDB();
        const transaction = db.transaction([this._objectStoreName], "readwrite");
        const objectStore = transaction.objectStore(this._objectStoreName);
        const result = objectStore.put(user);

        result.onsuccess = (event) => {
            console.log("User edited successfully");
            this._idbManager.closeDB(db);
        };
        result.onerror = (event) => {
            console.log("Error editing the user:", event.error);
            this._idbManager.closeDB(db);
        };
    }

    // Checks if a user with the specified email exists
    async exists(userEmail) {
        const db = await this._idbManager.openDB();
        return new Promise(async (resolve, reject) => {
            const transaction = db.transaction([this._objectStoreName], "readwrite");
            const objectStore = transaction.objectStore(this._objectStoreName);
            const result = objectStore.get(userEmail);

            result.onsuccess = (event) => {
                if (event.target.result !== undefined) {
                    console.log("User exists for user Email:", userEmail);
                    resolve(true);
                } else {
                    console.log("User does not exist for user email:", userEmail);
                    resolve(false);
                }
                this._idbManager.closeDB(db);
            };

            result.onerror = (event) => {
                console.log("Error checking if user exists:", event.error);
                this._idbManager.closeDB(db);
                reject(event.error);
            };
        });
    }

    // Retrieves all users from the object store
    async get() {
        return new Promise(async (resolve) => {
            const db = await this._idbManager.openDB();
            const transaction = db.transaction([this._objectStoreName], "readwrite");
            const objectStore = transaction.objectStore(this._objectStoreName);
            const result = objectStore.getAll();

            result.onsuccess = (event) => {
                console.log("Retrieved all user successfully:", event.target.result);
                resolve(event.target.result);
                this._idbManager.closeDB(db);
            };
            result.onerror = (event) => {
                console.log("Error retrieving all users:", event.error);
                this._idbManager.closeDB(db);
            };
        });
    }
}

const userStoreName = "userObjectStore";
export const userObjectStore = new ObjectStore(idbManager, userStoreName);
