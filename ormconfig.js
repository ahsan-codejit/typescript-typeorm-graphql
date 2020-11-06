let config = {
    "type": "sqlite",
    "database": "./db/db.sqlite3",
    "entities": [
        "./build/repositories/models/*.js"
    ],
    "synchronize": true
}

if (process.env.NODE_ENV === 'develop') {
    config.entities = [
        "./src/repositories/models/*.ts"
    ]
}

module.exports = config;