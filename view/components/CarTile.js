var React = require('react')
var FontAwesome = require('react-fontawesome')

var CarTile = React.createClass({
    onCarDelete: function() {
        this.props.onCarDelete(this.props.car)
    },
    render: function() {
        var styles = {
            "carTile": {
                "flex": "1 1 10rem",
                "border": "1px solid silver",
                "margin": ".25rem",
                "borderRadius": ".5rem",
            },
            "imageContainer": {
                "position": "relative",
                "width": "100%",
                "paddingBottom": "75%", // for a 3:4 ratio
            },
            "image": {
                "maxWidth": "100%",
                "maxHeight": "100%",
                "position": "absolute",
                "top": "50%",
                "transform": "translateY(-50%)",
            },
            "metadataContainer": {
                "position": "relative",
                "padding": ".5rem",
            }
        }
        return (
            <div
                className="CarTile"
                style={styles.carTile}
            >
                <div className="widgetContainer">
                    <button
                        className="checkButton"
                        type="button"
                        name="deleteCar"
                        onClick={this.onCarDelete}
                    >
                        <FontAwesome name='check-square-o' />
                    </button>
                    <button
                        className="deleteButton"
                        type="button"
                        name="deleteCar"
                        onClick={this.onCarDelete}
                    >
                        <FontAwesome name='remove' />
                    </button>
                </div>
                <div
                    className="imageContainer"
                    style={styles.imageContainer}
                >
                    {/* imgContainer is for constraining the icon, below */}
                    <img
                        src="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
                        alt={this.props.car['name']}
                        style={styles.image}
                    />
                </div>
                <div
                    className="metadataContainer"
                    style={styles.metadataContainer}
                >
                    <p className="carName">
                        {this.props.car['marque'] + ' ' + this.props.car['model']}
                    </p>
                </div>
            </div>
        )
    }
})

module.exports = CarTile