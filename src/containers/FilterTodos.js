import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterTodos} from "../actions";

class FilterTodos extends Component {
    createFilterRadio(value, text) {
        return (
            <label key={value}>
                <input type="radio" name="showTodos" value={value} checked={this.props.filter === value} onChange={event => this.props.filterTodos(value)}/> {text}
            </label>
        )
    }
    render() {
        const filterOptions = [
            [
                "all", "Show all"
            ],
            [
                "uncompleted", "Show uncompleted"
            ],
            ["completed", "Show completed"]
        ]

        return (
            <div className="FilterTodos">
                {filterOptions.map(option => this.createFilterRadio.apply(this, option))}
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {filter: state.filter}
}

const mapDispatchToProps = function(dispatch) {
    return {
        filterTodos: function(filter) {
            dispatch(filterTodos(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodos);
