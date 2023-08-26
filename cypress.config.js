const mysql = require('mysql')
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      on('task', 
      {
        queryTestDb: (query)=>{
          const connection = mysql.createConnection(config.env.db);
          connection.connect();

          return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
              if( err ){
                reject( err );
              } else {
                connection.end();
                return resolve( result );
              }
            });
          });
        
        }
      }
      );
    },
    excludeSpecPattern:[
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ]
  },
});
