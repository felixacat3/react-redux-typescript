import {VisibilityFilters} from '../actions'
import {VisibilityFilterAction, SET_VISIBILITY_FILTER } from '../types'


const VisibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: VisibilityFilterAction) => {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default: 
            return state;
    }
}

export default VisibilityFilter