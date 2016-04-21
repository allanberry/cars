# Cars

This is an attempt to explore some new technologies.  It's definitely a work in progress, and will take some time to mature.

Thanks for visiting.


## To get running

1. In `cars`: `python app.py`, to start the main Flask app
1. In `cars`: `mongod`, to start the database
1. In  `cars/view`: `watchify -t [ babelify --presets [ react ] ] main.js -o bundle.js` to continuously update `bundle.js` with jsx code in `main.js` 
2. 1. In `cars/adminMongo`: `npm start` (optional: for starting AdminMongo, a DB browser)