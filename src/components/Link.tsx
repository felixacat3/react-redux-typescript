import React from 'react';
import PropTypes from 'prop-types'

export interface ILinkProps {
    active: boolean;
    children: React.ReactNode
    onClick: (event:React.MouseEvent<HTMLButtonElement>) => (void)
}

const Link:React.FunctionComponent<ILinkProps> = ({active, children, onClick}) => (
<button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
) ;

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }
  
  export default Link