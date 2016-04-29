mongo cars_db --eval "db.cars.remove({})"
mongoimport --db cars_db --collection cars --file db/initial_data.json --jsonArray 