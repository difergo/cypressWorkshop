# cypressWorkshop

- use `npm run run:server` to launch json-server
- use `npm run test` to launch cypress

### Set up mysql db using docker for db tests

`docker pull mysql`\
`docker run -e MYSQL_ROOT_PASSWORD=<pass> -d mysql` Set up server\
`docker run -it mysql /bin/bash` container to use as client\
\
On a different terminal `docker container ls` to list running containers\
Identify the container that is being used as mysql server\
run `docker inspect mysql_server_container_name`\
Search the `IpAddress` field in the result > *This IpAddress will also be required to run the tests*

In client continer run the following:
`mysql -h <idAddress> -u root -p` (password will be requested)
Now, MySql commands can be used to set up and query the DB

**tip**: clic `ctrl+c` followed by `ctrl+d` to detach from a container's bash, exit also works

#### Set up PhpMyAdmin container to control the databes through UI

run `docker run -p 8080:80 -d -e PMA_ARBITRARY=1 phpmyadmin`
this command binds the 8080 port on the local machine to the 80 port from the container
PMA_ARBITRARY is used so that PhpMyAdmin avoids using default server

go to `http://localhost:8080/`

Import `mysqldb.sql` in PhpMyAdmin

