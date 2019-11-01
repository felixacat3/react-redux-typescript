import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer:React.FunctionComponent = () => (
    <div>
        <span>Show: </span>
        <FilterLink onClick={()=>{}} filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink onClick={()=>{}} filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink onClick={()=>{}} filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
)

export default Footer