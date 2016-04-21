var React = require('react')
var ReactDOM = require('react-dom')
var d3 = require('d3')
var utils = require('./utilities')

var mountNode = document.getElementById('react_mount_point')



var CarList = React.createClass({
    getInitialState: function() {
        return { cars: '' }
    },

    componentDidMount: function() {
        this.serverRequest = d3.json('/cars.json')
    },

    componentWillUnmount: function() {
        this.serverRequest.abort()
    },

    render: function() {

        var carTiles = []
        this.props.cars.forEach(function(car) {
            key = utils.slugify(car.marque + "_" + car.model)
            carTiles.push(<CarTile car={car} key={key} />);
        })
        return (
            <div className="carList">
                <CarFilters />
                {carTiles}
            </div>
        )
    }
})

var CarFilters = React.createClass({
    render: function() {

        return (
            <div className="tile carFiltersTile">Filters</div>
        )
    }
})

var CarTile = React.createClass({
    render: function() {
        var image_name = this.props.car['years'][0]['pictures'][0]['name']
        return (
            <div className="tile carTile">
                <input id="toggle" type="checkbox" />

                <div className="img_container">
                    {/* img_container is for constraining the icon, below */}
                    <img src={"/view/img/cars/1000/" + image_name}></img>
                </div>
                <p>{this.props.car.marque} {this.props.car.model}</p>
            </div>
            )
        }
    }
)

var CARS = "/cars.json"


ReactDOM.render(
    <CarList />, mountNode
)

