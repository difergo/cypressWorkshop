const mysql = require('mysql')
const { defineConfig } = require("cypress");
const { MongoClient } = require("mongodb");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      on('task',
        {
          queryTestDb: (query) => {
            const connection = mysql.createConnection(config.env.db);
            connection.connect();

            return new Promise((resolve, reject) => {
              connection.query(query, (err, result) => {
                if (err) {
                  reject(err);
                } else {
                  connection.end();
                  return resolve(result);
                }
              });
            });

          },
          getPlanets: async function () {
            let client;
            try {
              client = new MongoClient(config.env.mongo);
              await client.connect();
              console.log("Connected to MongoDB");

              const db = client.db('cypress');
              const collection = db.collection("planets");
              const results = await collection.find({}).toArray();
              return results;
            } catch (e) {
              console.error("Error connecting to MongoDB", e);
              throw e;
            } finally {
              if (client) {
                await client.close();
                console.log("Disconnected from MongoDB");
              }
            }
          },
          mongoCreatePlanet: async function (planet) {
            try {
              client = new MongoClient(config.env.mongo);
              await client.connect();
              console.log("Connected to MongoDB");

              const db = client.db('cypress');
              const collection = db.collection("planets");
              const result = await collection.insertOne(planet);
              return result;
            } catch (error) {
              console.error(error);
            } finally {
              await client.close();
            }
          },
          clearPlanets: async function(){
            try {
              client = new MongoClient(config.env.mongo);
              await client.connect();
              console.log("Connected to MongoDB");

              const db = client.db('cypress');
              const collection = db.collection("planets");
              const result = await collection.deleteMany({});
              return result;
            } catch (error) {
              console.error(error);
            } finally {
              await client.close();
            }
          }

        }
      );
    },
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ]
  },
});
