import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CategoryCard extends Component {
  render() {
    const { category, id, onClickCategoryButton } = this.props;
    return (
      <button
        data-testid="category"
        type="button"
        id={ id }
        onClick={ onClickCategoryButton }
        className="flex py-1 hover:scale-105 text-gray-700 hover:text-black text-left"
      >
        { category }
      </button>
    );
  }
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickCategoryButton: PropTypes.func.isRequired,
};
