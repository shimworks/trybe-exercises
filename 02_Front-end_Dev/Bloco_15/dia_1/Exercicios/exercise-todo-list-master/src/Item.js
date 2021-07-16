import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, index, handleClick } = props
  return (
    <div className="Item" onClick={() => handleClick(index)}>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
