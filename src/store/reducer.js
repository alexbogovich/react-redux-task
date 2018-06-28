import {PERSON_ADD, PERSON_REMOVE} from "./actions";

const initState = {
  persons: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case PERSON_ADD: {
      return {
        persons: state.persons.concat({id: Math.random(), name: action.payload.name, age: action.payload.age})
      }
    }
    case PERSON_REMOVE: {
      return {
        persons: state.persons.filter(p => p.id !== action.payload.personId)
      }
    }
  }
  return state
}

export default reducer