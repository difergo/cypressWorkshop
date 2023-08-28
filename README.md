# cypressWorkshop

- use `npm run run:server` to launch json-server
- use `npm run test` to launch cypress

### Set up mysql db using docker for db tests

`docker pull mysql`\
`docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=<anypass> -d mysql` Set up server with default port for mysql being binded to the same port in the localhost\
`docker run -it mysql /bin/bash` container to use as client\
\
On a different terminal `docker container ls` to list running containers\
Identify the container that is being used as mysql server\
run `docker inspect mysql_server_container_name`\
Search the `IpAddress` field in the result > *This IpAddress will also be required to run the tests*

In client continer run the following:
`mysql -h <idAddress> -u root -p` (password will be requested)
Now, MySql commands can be used to set up and query the DB

In order for the mysql library to be able to connect to this db, we have to set the following config through the mysql client:\
`ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '<anypass>';`\
`flush privileges;`\
\
**tip**: clic `ctrl+c` followed by `ctrl+d` to detach from a container's bash, exit also works

#### Set up PhpMyAdmin container to control the databes through UI

run `docker run -p 8080:80 -d -e PMA_ARBITRARY=1 phpmyadmin`
this command binds the 8080 port on the local machine to the 80 port from the container
PMA_ARBITRARY is used so that PhpMyAdmin avoids using default server

go to `http://localhost:8080/`

Import `mysqldb.sql` in PhpMyAdmin

### Set up MongoDB server using docker for tests

run: `docker run -d -p 27017:27017 --name my_mongo_db mongo`\
this will create an instance of mongoDb accessible from the localhost (Tests are already configured to point to the localhost)



