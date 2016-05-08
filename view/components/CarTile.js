var React = require('react')

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

module.exports = CarTile