/
    -src/
        index.js // server
        models/
        comtrollers/
        middlewares/
        services/
        utils/
        config/
        repository/
        
    - tests/ [later]

# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute 'npm install' on the same path as of your directory of the downloaded project
- create a '.env' file in the root directory and add the following environment variable
    - 'PORT=3000'
- Inside the 'src/config' folder create a new file 'config.json' and thn add the following piece of json

```
{
  "development": {
    "username": "your db login name",
    "password": "You db password ",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`
```


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name,  address, city_id, created_at, updated_at
    Relationship -> city has many airports and Airport belongs to a city (one to many)
    
```
npx sequelize model:generate --name Airport -- attributes name:String,address:String,city:Integer
```


