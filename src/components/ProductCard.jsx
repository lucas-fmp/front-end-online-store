import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { id, title, price, thumbnail, shipping } = this.props;
    const { free_shipping: freeShipping } = shipping;
    return (
      <Link
        data-testid="product"
        className="bg-white rounded-md shadow-md flex flex-col
        gap-1 relative p-4 pb-14"
        to={ `/product/${id}` }
      >
        <img
          src={ thumbnail }
          alt={ title }
          className="mx-auto w-3/5 py-2"
        />
        <h3 className="font-bold text-sm px-4 truncate text-center">{title}</h3>
        <h4 className="text-gray-400 text-sm text-center">
          R$
          {' '}
          <span className="text-black text-base">
            {price.toFixed(2).replace('.', ',')}
          </span>
        </h4>
        {
          freeShipping && (
            <p
              data-testid="free-shipping"
              className="absolute right-2 top-2
              bg-[#003BE5] px-3 text-white text-sm rounded-sm"
            >
              Frete
              <br />
              Grátis!
            </p>
          )
        }
      </Link>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool,
  }).isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
