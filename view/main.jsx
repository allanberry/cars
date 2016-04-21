var React = require('react')
var ReactDOM = require('react-dom')
var d3 = require('d3')
var utils = require('./utilities')

var mountPoint = document.getElementById('react_mount_point')

var CarBox = React.createClass({
    render: function() {
        return (
            <div className="CarBox">
                <h1>Cars</h1>
                <CarFilter />
                <CarList />
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
        return (
            <div className="CarList">
                <CarTile marque="Ford" model="Escape" >This is the first tile.</CarTile>
                <CarTile marque="Subaru" model="Outback" >This is another.</CarTile>
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
    <CarBox />, mountPoint
)