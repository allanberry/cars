var React = require('react');
var ReactDOM = require('react-dom');
var d3 = require('d3')

var mountNode = document.getElementById('react_mount_point');

var CARS = [
  {marque: 'Ford',      model: 'Escape',    year: 2016},
  {marque: 'Subaru',    model: 'Crosstrek', year: 2016},
  {marque: 'Subaru',    model: 'Impreza',   year: 2016},
  {marque: 'Subaru',    model: 'Forester',  year: 2016},
  {marque: 'Buick',     model: 'Encore',    year: 2016},
  {marque: 'Toyota',    model: 'Rav4',      year: 2016},
  {marque: 'Mazda',     model: 'CX5',       year: 2016},
  {marque: 'Honda',     model: 'CRV',       year: 2016}
]

var CarList = React.createClass({
  render: function() {
    var carTiles = []
    this.props.cars.forEach(function(car) {
        key = car.marque + "_" + car.model + "_" + car.year
        carTiles.push(<CarTile car={car} key={key} />);
    })
    return (
      <div className="carList">
        This is a CarList
        {carTiles}
      </div>
    )
  }
})

var CarTile = React.createClass({
  render: function() {
    return (
      <div className="carTile">
        <p>{this.props.car.marque} {this.props.car.model}</p>
        <p>{this.props.car.year}</p>
      </div>
    )
  }
})

ReactDOM.render(
  <CarList cars={CARS} />, mountNode
)