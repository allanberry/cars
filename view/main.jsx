var React = require('react')
var ReactDOM = require('react-dom')
var d3 = require('d3')
var utils = require('./utilities')

var mountPoint = document.getElementById('react_mount_point')

var CarBox = React.createClass({
    getInitialState: function() {
        return {data: []}
    },
    carURL: function(car) {
        return '/cars/' + car.marque + '/' + car.model
    },
    handleCarSubmit: function(car) {
        d3.xhr(this.carURL(car))
            .header("Content-Type", "application/json")
            .on("error", function(error) {
                console.log('failed to create the car: ' + car.marque + ' ' + car.model )
            })
            .on("load", function(xhr) {
                this.loadCarsFromServer()
                console.log('created the car: ' + car.marque + ' ' + car.model )
            }.bind(this))
            .send('POST', JSON.stringify(car))
    },
    handleCarDelete: function(car) {
        d3.xhr(this.carURL(car))
            .on("error", function(error) {
                console.log('failed to delete the car: ' + car.marque + ' ' + car.model )
            })
            .on("load", function(xhr) {
                this.loadCarsFromServer()
                console.log('deleted the car: ' + car.marque + ' ' + car.model )
            }.bind(this))
            .send('DELETE')
    },
    loadCarsFromServer: function() {
        d3.json(this.props.data_url, function(error, json) {
            if (error) return console.warn(error);
            this.setState({data: json})
        }.bind(this))
    },
    componentDidMount: function() {
        this.loadCarsFromServer();
        setInterval(this.loadCarsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="CarBox">
                <h1>Cars</h1>
                <CarFilter />
                <CarList data={this.state.data} onCarDelete={this.handleCarDelete}/>
                <CarForm onCarSubmit={this.handleCarSubmit}/>
                {this.props.url}
            </div>
        )
    }
})

var CarFilter = React.createClass({
    render: function() {
        return (
            <div className="CarFilter">
                Hello World!  I am a CarFilter.
            </div>
        )
    }
})

var CarList = React.createClass({
    render: function() {
        var carNodes = this.props.data.map(function(car) {
            return (
                <CarTile car={car} key={car._id["$oid"]} onCarDelete={this.props.onCarDelete}/>
            )
        }.bind(this))
        return (
            <div className="CarList">
                {carNodes}
            </div>
        )
    }
})

var CarTile = React.createClass({
    onCarDelete: function() {
        this.props.onCarDelete(this.props.car)
    },
    render: function() {
        return (
            <div className="tile CarTile">
                <div className="widget_container">
                    <input
                        className="select widget"
                        type="checkbox" />
                    <button
                        className="widget delete"
                        type="button"
                        name="deleteCar"
                        onClick={this.onCarDelete}>x</button>
                </div>
                <div className="image_container">
                    {/* img_container is for constraining the icon, below */}
                    <img src="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"></img>
                </div>
                <div className="metadata_container">
                    <p className="car_name">
                        {this.props.car['marque'] + ' ' + this.props.car['model']}
                    </p>
                </div>
            </div>
        )
    }
})

var CarForm = React.createClass({
    getInitialState: function() {
        return {marque: '', model: ''}
    },
    handleMarqueChange: function(e) {
        this.setState({marque: e.target.value})
    },
    handleModelChange: function(e) {
        this.setState({model: e.target.value})
    },
    handleSubmit: function(e) {
        e.preventDefault()
        var marque = this.state.marque.trim()
        var model = this.state.model.trim()
        if (!marque || !model) {
            return
        }
        this.props.onCarSubmit({marque: marque, model: model})
        this.setState({marque: '', model: ''})
    },
    render: function() {
        return (
            <form className="carForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Marque"
                    value={this.state.marque}
                    onChange={this.handleMarqueChange}
                />
                <input
                    type="text"
                    placeholder="Model"
                    value={this.state.model}
                    onChange={this.handleModelChange}
                />
                <input type="submit" value="Post" />
            </form>
        )
    }
})

ReactDOM.render(
    <CarBox data_url="/cars.json" pollInterval={2000} />, mountPoint
)