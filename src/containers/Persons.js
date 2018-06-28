import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {PERSON_ADD, PERSON_REMOVE} from "../store/actions";
import {connect} from "react-redux";

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (name, age) => dispatch({type: PERSON_ADD, payload: {name, age}}),
        onRemovePerson: (id) => dispatch({type: PERSON_REMOVE, payload: {personId: id}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);