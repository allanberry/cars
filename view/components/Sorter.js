var React = require('react')

var Sorter = React.createClass({
    render: function() {
        var selectOptions = this.props.sort_terms.map(function(item) {
            return (
                <option key={item} value={item}>{item}</option>
            )
        }.bind(this))
        return (
            <div className="Sorter">
                <input list="sort_items" name="sortItemSet" />
                <datalist id="sort_items">
                    {selectOptions}
                </datalist>
            </div>
        )
    }
})

module.exports = Sorter