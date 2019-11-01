import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { AppState } from '../reducers';
import { ILinkProps } from '../components/Link'
import { Dispatch } from 'redux'

interface IFilterLinkProp {
    filter: string;
}

const mapStateToProps = (state: AppState , ownProps: IFilterLinkProp) => ({
 active: state.visibilityFilterReducer === ownProps.filter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IFilterLinkProp ) => ({
 onClick: ()=> dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps
)(Link)