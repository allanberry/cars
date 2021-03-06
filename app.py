import json
from flask import Flask, Response
from flask import render_template, request
from bson.json_util import dumps
from flask.ext.pymongo import PyMongo

app = Flask( __name__,
        static_folder="view",
    )

app.config['MONGO_DBNAME'] = 'cars_db'
mongo = PyMongo(app)

@app.route("/")
def home():
    return render_template('index.html')


@app.route("/cars")
def show_cars():
    return render_template('cars.html')

@app.route("/cars.json")
def cars_json():
    cars = mongo.db.cars.find()
    json_response = dumps(cars, indent=2, sort_keys=True)
    return Response(json_response, mimetype='application/json')


@app.route("/cars/<marque>")
def show_marque(marque):
    context = {
        'marque': marque,
    }
    return render_template('marque.html', context=context)


@app.route("/cars/<marque>/<model>", methods=['GET', 'POST', 'DELETE'])
def model(marque, model):
    car = {
        'marque': marque,
        'model': model,
    }
    if request.method == 'GET':
        return render_template('model.html', context=car)
    if request.method == 'DELETE':
        mongo.db.cars.remove({
            'marque': car['marque'],
            'model': car['model']}, 1)
        return ('Success', 205)
    if request.method == 'POST':
        new_car = request.get_json()
        mongo.db.cars.insert_one({
            'marque': new_car['marque'],
            'model': new_car['model'],
        })
        return ('Success', 201)


@app.route("/colophon")
def colophon():
    return render_template('colophon.html')

if __name__ == "__main__":
    app.run(
        debug=True,
    )