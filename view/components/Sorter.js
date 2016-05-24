var React = require('react')
var FontAwesome = require('react-fontawesome')
var utils = require('../utilities')

var Sorter = React.createClass({
    addSorter: function() {
        // Create new Sorter
    },
    deleteSorter: function(sorter) {
        // Delete Sorter
    },
    render: function() {
        var styles = {}
        var options = ['Marque', 'Model']
        var sorterItemNodes = options.map(function(option) {
            return (
                <SorterItem key={utils.slugify(option)} option={option} selectOptions={options} />
            )
        }.bind(this))

        return (
            <div className="Sorter">
                {sorterItemNodes}
                <button
                    className="sorterAdd"
                    type="button"
                    style={styles}
                    onClick=""
                >
                    <FontAwesome name='plus' />
                </button>
            </div>
        )
    }
})

var source;

var SorterItem = React.createClass({

    isbefore: function(a, b) {
        if (a.parentNode == b.parentNode) {
            for (var cur = a; cur; cur = cur.previousSibling) {
                if (cur === b) { 
                    return true;
                }
            }
        }
        return false;
    },

    dragenter: function(e) {
        // if (this.isbefore(source, e.target)) {
        //     e.target.parentNode.insertBefore(source, e.target);
        // }
        // else {
        //     e.target.parentNode.insertBefore(source, e.target.nextSibling);
        // }
    },

    dragstart: function(event) {
        // source = event.target;
        // event.dataTransfer.effectAllowed = 'move';
    },

    render: function() {
        var selectOptions = this.props.selectOptions.map(function(option) {
            return (
                <option key={option} value={option}>{option}</option>
            )
        }.bind(this))

        var styles = {
            sorterItem: {
                display: 'inline-block',
                border: "1px solid silver",
                padding: ".125rem",
                marginRight: ".25rem",
                cursor: "move",
            },
            sorterHandle: {
                width: '1rem',
                height: '1rem',
                cursor: 'grab',
                display: 'inline-block',
                margin: "0 .25rem 0 .125rem",
            },
            sorterOrder: {
                display: 'inline-block',
            },
            sorterDelete: {
                marginLeft: ".125rem",
            }
        }
        return (
            <div
                className="SorterItem"
                style={styles.sorterItem}
                draggable="true"
                ondragenter={this.dragenter(event)}
                ondragstart={this.dragstart(event)}
            >
                <div
                    className="sorterHandle"
                    style={styles.sorterHandle}
                >
                    <FontAwesome name='arrows'/>
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
                    style={styles.sorterOrder}
                    onClick=""
                >
                    <FontAwesome name='unsorted' />
                </button>
                <button
                    className="sorterDelete"
                    type="button"
                    style={styles.sorterDelete}
                    onClick=""
                >
                    <FontAwesome name='remove' />
                </button>
            </div>
        )
    }
})

module.exports = Sorter