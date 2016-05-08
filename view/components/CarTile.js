var React = require('react')

var CarTile = React.createClass({
    onCarDelete: function() {
        this.props.onCarDelete(this.props.car)
    },
    render: function() {
        return (
            <div className="tile CarTile">
                <div className="widgetContainer">
                    <input
                        className="select widget"
                        type="checkbox"
                    />
                    <button
                        className="widget delete"
                        type="button"
                        name="deleteCar"
                        onClick={this.onCarDelete}
                    >x</button>
                </div>
                <div className="imageContainer">
                    {/* imgContainer is for constraining the icon, below */}
                    <img
                        src="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
                        alt={this.props.car['name']}
                    />
                </div>
                <div className="metadataContainer">
                    <p className="carName">
                        {this.props.car['marque'] + ' ' + this.props.car['model']}
                    </p>
                </div>
            </div>
        )
    }
})

module.exports = CarTile