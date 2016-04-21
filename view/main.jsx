var React = require('react')
var ReactDOM = require('react-dom')
var d3 = require('d3')
var utils = require('./utilities')

var mountPoint = document.getElementById('react_mount_point')

var CarBox = React.createClass({
    render: function() {
        return (
            <div className="CarBox">
                Hello World!  I&#39;m a CarBox.
            </div>
        )
    }
})

ReactDOM.render(
    <CarBox />, mountPoint
)