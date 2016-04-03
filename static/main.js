var React = require('react')
var ReactDOM = require('react-dom')
var d3 = require('d3')

var mountNode = document.getElementById('react_mount_point')

var CARS = [
    {marque: 'Ford',      model: 'Escape',    year: 2016},
    {marque: 'Subaru',    model: 'Crosstrek', year: 2016},
    {marque: 'Buick',     model: 'Encore',    year: 2016},
    {marque: 'Toyota',    model: 'Rav4',      year: 2016},
    {marque: 'Mazda',     model: 'CX5',       year: 2016},
    {marque: 'Honda',     model: 'CRV',       year: 2016}
]

function slugify(text) {
    // hat tip https://gist.github.com/mathewbyrne/1280286
    return text.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/&/g, '-and-')         // Replace & with 'and'
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+|-+$/g, '');       // remove leading, trailing -
}

var CarList = React.createClass({
    render: function() {
        var carTiles = []
        this.props.cars.forEach(function(car) {
        key = slugify(car.marque + "_" + car.model + "_" + car.year)
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
        var img_path = slugify(
            this.props.car.marque + "_" +
            this.props.car.model + "_" + 
            this.props.car.year
      
        return (
            <div className="carTile">
                <div className="img_container">
                    {/* img_container is for constraining icon, below */}
                    <img src={"/static/img/cars/1000/"+img_path+".jpg"}></img>
                </div>
                <p>{this.props.car.year} {this.props.car.marque} {this.props.car.model}</p>
            </div>
            )
        }
    }
)

ReactDOM.render(
    <CarList cars={CARS} />, mountNode
)