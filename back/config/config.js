require('dotenv').config();
const pg = require('pg')

const username = process.env.NAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;
const node_env = process.env.NODE_ENV;
const session_secret = process.env.SESSION_SECRET;

const config = {
    
        "development": {
          "username": "postgres",
          "password": "root",
          "database": "database_development",
          "host": "127.0.0.1",
          "dialect": "postgres"
        },
        "test": {
          "username": "root",
          "password": null,
          "database": "database_test",
          "host": "127.0.0.1",
          "dialect": "postgres"
        },
        "production": {
          "username": "root",
          "password": null,
          "database": "database_production",
          "host": "127.0.0.1",
          "dialect": "postgres"
        }
    
};

module.exports = config[node_env];