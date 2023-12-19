# Nodejs-Sequelize-Tangmo

### About Sequilize-cli
```sh
initial sequelize 
- npx sequelize-cli init
```
```sh
generate model and migration file
- npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```
```sh
create table
Use sequelize cli to read files in folder migrations
- npx sequelize-cli db:migrate
```
```sh
generate seed file
- npx sequelize-cli seed:generate --name demo-user
```
```sh
insert data to table
npx sequelize-cli db:seed --seed xxxxxxxxxxxxxx-demo-user.js
```

### API Path

| Method | Path |
| ------ | ------ |
| POST | http://localhost:5000/api/user |
| GET | http://localhost:5000/api/users |
| GET | http://localhost:5000/api/user/1 |
| PUT | http://localhost:5000/api/user/1 |
| DELETE | http://localhost:5000/api/user/1 |
