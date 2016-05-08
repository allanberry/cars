var React = require('react')
var FontAwesome = require('react-fontawesome')

var Sorter = React.createClass({
    addSorter: function() {
        // Create new Sorter
    },
    deleteSorter: function(sorter) {
        // Delete Sorter
    },
    render: function() {
        return (
            <div className="Sorter">
                <SorterItem option="Red" selectOptions={['Red', 'Green']} />
                <button
                    className="sorterAdd"
                    type="button"
                    onClick=""
                >+</button>
            </div>
        )
    }
})

var SorterItem = React.createClass({
    render: function() {
        var selectOptions = this.props.selectOptions.map(function(option) {
            return (
                <option key={option} value={option}>{option}</option>
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
            <div className="SorterItem" style={sorterItemStyle}>
                <div className="sorterHandle" style={sorterHandleStyle} />
                <input
                    className="sorterInput"
                    defaultValue={this.props.option}
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
                    >
                        <FontAwesome name='sort-amount-asc' />
                    </button>
                    <button
                        className="sorterDescending"
                        type="button"
                        style={sorterOrderWidgetStyle}
                        onClick=""
                    >
                        <FontAwesome name='sort-amount-desc' />
                    </button>
                </div>
                <button
                    className="sorterDelete"
                    type="button"
                    onClick=""
                >x</button>
            </div>
        )
    }
})

module.exports = Sorter