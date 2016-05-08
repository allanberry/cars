var React = require('react')

var Sorter = React.createClass({
    render: function() {
        var selectOptions = this.props.sortTerms.map(function(item) {
            return (
                <option key={item} value={item}>{item}</option>
            )
        }.bind(this))
        return (
            <div className="Sorter">
                <input list="sortItems" name="sortItemSet" />
                <datalist id="sortItems">
                    {selectOptions}
                </datalist>
            </div>
        )
    }
})

module.exports = Sorter