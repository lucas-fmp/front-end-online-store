import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HiMinus, HiPlus } from 'react-icons/hi';

export default class ProductCardCart extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };
  }

  increaseQuantity = () => {
    const { quantity } = this.state;
    const { availableQuantity } = this.props;
    const newQuantity = quantity + 1;
    if (newQuantity <= availableQuantity) {
      this.setState({ quantity: newQuantity });
    }
  }

  decreaseQuantity = () => {
    const { quantity } = this.state;
    const newQuantity = quantity - 1;
    if (newQuantity < 1) {
      this.setState({ quantity: 1 });
    } else { this.setState({ quantity: newQuantity }); }
  }

  render() {
    const { id, title, price, thumbnail } = this.props;
    const { quantity } = this.state;
    return (
      <div
        data-testid="product"
        className="h-fit py-8 flex flex-col lg:flex-row
        gap-4 items-center justify-between"
      >
        <img src={ thumbnail } alt={ title } />
        <Link
          data-testid="product-detail-link"
          className="w-full text-center lg:w-1/4 xl:w-1/3 2xl:w-1/2"
          to={ `/product/${id}` }
        >
          <h3
            data-testid="shopping-cart-product-name"
            className="truncate"
          >
            {title}
          </h3>
        </Link>
        <div className="flex gap-2">
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.decreaseQuantity }
            className="text-gray-400"
          >
            <HiMinus />
          </button>
          <p
            data-testid="shopping-cart-product-quantity"
            className="bg-gray-400 text-white rounded-full
            w-6 h-6 flex justify-center items-center"
          >
            {quantity}
          </p>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.increaseQuantity }
            className="text-gray-400"
          >
            <HiPlus />
          </button>
        </div>
        <p className="text-gray-600">{`R$ ${price.toFixed(2).replace('.', ',')}`}</p>
      </div>
    );
  }
}

ProductCardCart.propTypes = {
  availableQuantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
