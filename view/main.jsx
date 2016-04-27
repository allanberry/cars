var React = require('react')
var ReactDOM = require('react-dom')
var d3 = require('d3')
var utils = require('./utilities')

var mountPoint = document.getElementById('react_mount_point')

var data = [
    {id: 1, marque: "Ford", model: "Escape", summary: "A fine car."},
    {id: 2, marque: "Subaru", model: "Outback", summary: "A good car."}
]

var CarBox = React.createClass({
    render: function() {
        return (
            <div className="CarBox">
                <h1>Cars</h1>
                <CarFilter />
                <CarList data={this.props.data} />
                <CarForm />
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
                <CarTile marque={car.marque} model={car.model} key={car.id}>
                    {car.summary}
                </CarTile>
            )
        })
        return (
            <div className="CarList">
                {carNodes}
            </div>
        )
    }
})

var CarTile = React.createClass({
    render: function() {
        return (
            <div className="CarTile">
                <h2 className="car_name">
                    {this.props.marque + ' ' + this.props.model}
                </h2>
                {this.props.children}
            </div>
        )
    }
})

var CarForm = React.createClass({
    render: function() {
        return (
            <div className="CarForm">
                Hello World!  I am a CarForm.
            </div>
        )
    }
})


ReactDOM.render(
    <CarBox data={data}/>, mountPoint
)