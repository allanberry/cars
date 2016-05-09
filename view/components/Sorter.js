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
                >
                    <FontAwesome name='plus' />
                </button>
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
            display: 'inline-block'
        }
        return (
            <div className="SorterItem" style={sorterItemStyle}>
                <div className="sorterHandle" style={sorterHandleStyle}>
                    <FontAwesome name='reorder' />
                </div>
                <input
                    className="sorterInput"
                    defaultValue={this.props.option}
                    list={this.props.key + "-sorterItems"}
                    name="sorterItems"
                />
                <datalist className="sorterList" id={this.props.key + "-sorterItems"}>
                    {selectOptions}
                </datalist>
                <button
                    className="sorterOrder"
                    type="button"
                    style={sorterOrderStyle}
                    onClick=""
                >
                    <FontAwesome name='unsorted' />
                </button>
                <button
                    className="sorterDelete"
                    type="button"
                    onClick=""
                >
                    <FontAwesome name='remove' />
                </button>
            </div>
        )
    }
})

module.exports = Sorter