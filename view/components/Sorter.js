var React = require('react')

var Sorter = React.createClass({
    addSorter: function() {
        // Create new Sorter
    },
    render: function() {
        var selectOptions = this.props.sortTerms.map(function(item) {
            return (
                <option key={item} value={item}>{item}</option>
            )
        }.bind(this))
        var sorterItemStyle = {
            border: '1px solid orange',
            display: 'inline-block'
        }
        var sorterHandleStyle = {
            border: '1px solid green',
            width: '1rem',
            height: '1rem',
            cursor: 'grab',
            display: 'inline-block',
        }
        var sorterOrderStyle = {
            border: '1px solid blue',
            display: 'inline-block'
        }
        var sorterOrderWidgetStyle = {
            border: '1px solid red'
        }
        return (
            <div className="Sorter">
                <div className="sorterItem" style={sorterItemStyle}>
                    <div className="sorterHandle" style={sorterHandleStyle} />
                    <input
                        className="sorterInput"
                        list={this.props.key + "-sorterItems"}
                        name="sorterItems"
                    />
                    <datalist className="sorterList" id={this.props.key + "-sorterItems"}>
                        {selectOptions}
                    </datalist>
                    <div className="sorterOrder" style={sorterOrderStyle}>
                        <button
                            className="sorterAscending"
                            type="button"
                            style={sorterOrderWidgetStyle}
                            onClick=""
                        >+</button>
                        <button
                            className="sorterDescending"
                            type="button"
                            style={sorterOrderWidgetStyle}
                            onClick=""
                        >-</button>
                    </div>
                    <button
                        className="sorterDelete"
                        type="button"
                        onClick=""
                    >x</button>
                </div>
                <button
                    className="sorterAdd"
                    type="button"
                    onClick=""
                >+</button>
            </div>
        )
    }
})

module.exports = Sorter