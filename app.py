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

@app.route("/cars.json", methods=['GET', 'POST'])
def cars_json():
    if request.method == 'GET':
        cars = mongo.db.cars.find()
        json_response = dumps(cars, indent=2, sort_keys=True)
        return Response(json_response, mimetype='application/json')
    if request.method == 'POST':
        new_car = request.get_json()
        mongo.db.cars.insert_one({
            'marque': new_car['marque'],
            'model': new_car['model'],
        })
        return ('Success', 201)


@app.route("/cars/<marque>")
def show_marque(marque):
    context = {
        'marque': marque,
    }
    return render_template('marque.html', context=context)


@app.route("/cars/<marque>/<model>")
def show_model(marque, model):
    context = {
        'marque': marque,
        'model': model,
    }
    return render_template('model.html', context=context)


@app.route("/colophon")
def colophon():
    return render_template('colophon.html')

if __name__ == "__main__":
    app.run(
        debug=True,
    )